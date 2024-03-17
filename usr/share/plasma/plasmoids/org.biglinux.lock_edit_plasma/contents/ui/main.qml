/*
* SPDX-FileCopyrightText: 2022 Bruno Gonçalves <bigbruno@gmail.com> and Rafael Ruscher <rruscher@gmail.com>
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
    property string outputText

    function runCommand() {
        // Change to run your command
        executable.exec('cat $HOME/.config/lockplasma');
    }

    function toggle() {
        executable.exec('/usr/share/bigbashview/bcc/apps/biglinux-themes-gui/lock-desktop.run');
        timer.interval = 500;
    }

    preferredRepresentation: fullRepresentation
    // Active = in systray and Passive in notification area
    Plasmoid.status: {
        //return PlasmaCore.Types.ActiveStatus;
        return PlasmaCore.Types.PassiveStatus;
    }

    Plasma5Support.DataSource {
        id: "executable"
        signal exited(string sourceName, int exitCode, int exitStatus, string stdout, string stderr)
        function exec(cmd) {
            connectSource(cmd);
        }

        engine: "executable"
        connectedSources: []
        onNewData: function(sourceName, data) {
            var exitCode = data["exit code"];
            var exitStatus = data["exit status"];
            var stdout = data["stdout"];
            var stderr = data["stderr"];
            exited(sourceName, exitCode, exitStatus, stdout, stderr);
            disconnectSource(sourceName);
        }
    }

    Connections {
        function onExited(sourceName, exitCode, exitStatus, stdout, stderr) {
            Qt.callLater(function() {
                root.outputText = stdout;
            });
            timer.restart();
        }

        target: executable
    }

    Timer {
        id: timer

        // Wait in ms
        interval: 7000
        onTriggered: runCommand()
        Component.onCompleted: {
            triggered();
        }
    }

    fullRepresentation: PlasmoidItem {
        Kirigami.Icon {
            id: icon
            source: outputText ? 'biglinux-lock' : 'biglinux-unlock'
            height: Math.min(parent.height, parent.width)
            width: Math.min(parent.height, parent.width)
            anchors.fill: parent
        }

        MouseArea {
            anchors.fill: parent
            onClicked: toggle()
        }

    }

}
