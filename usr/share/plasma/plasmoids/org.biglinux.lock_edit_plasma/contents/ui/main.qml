/*
 * SPDX-FileCopyrightText: 2022-2026 Bruno Gonçalves <bigbruno@gmail.com> and Rafael Ruscher <rruscher@gmail.com>
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */
import QtQuick
import org.kde.plasma.plasmoid
import org.kde.plasma.core as PlasmaCore
import org.kde.kirigami as Kirigami
import org.kde.plasma.plasma5support as Plasma5Support

PlasmoidItem {
    id: root

    // Read lock state directly from Plasma API
    // Plasmoid.immutable is true when desktop is locked (userImmutable or systemImmutable)
    readonly property bool isLocked: Plasmoid.immutable

    // Toggle lock state using D-Bus (only way to change immutability)
    function toggleLock() {
        if (isLocked) {
            executable.exec('qdbus6 org.kde.plasmashell /PlasmaShell evaluateScript "lockCorona(false)"')
        } else {
            executable.exec('qdbus6 org.kde.plasmashell /PlasmaShell evaluateScript "lockCorona(true)"')
        }
    }

    preferredRepresentation: fullRepresentation

    // Passive = in notification area (system tray overflow)
    Plasmoid.status: PlasmaCore.Types.PassiveStatus

    // D-Bus command executor for toggle action
    Plasma5Support.DataSource {
        id: executable

        engine: "executable"
        connectedSources: []

        function exec(cmd) {
            connectSource(cmd)
        }

        onNewData: function(sourceName, data) {
            disconnectSource(sourceName)
        }
    }

    fullRepresentation: Item {
        implicitWidth: Kirigami.Units.iconSizes.medium
        implicitHeight: Kirigami.Units.iconSizes.medium

        Kirigami.Icon {
            id: icon
            source: root.isLocked ? "biglinux-lock" : "biglinux-unlock"
            anchors.fill: parent
        }

        MouseArea {
            anchors.fill: parent
            cursorShape: Qt.PointingHandCursor
            onClicked: root.toggleLock()
        }
    }
}
