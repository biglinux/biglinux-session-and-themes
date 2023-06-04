#!/bin/bash

# try 30 times, one per second to make porta desktop kde work fine
MAX_ATTEMPTS=30
SLEEP_TIME=1

attempt=1
while [ $attempt -le $MAX_ATTEMPTS ]; do
    result=$(qdbus org.freedesktop.impl.portal.desktop.kde /org/freedesktop/portal/desktop org.freedesktop.impl.portal.ScreenCast.version)

    if [ $? -eq 0 ]; then
        # Portal OK
        exit 0
    else
        # Portal fail retry

        if [ $attempt -eq $MAX_ATTEMPTS ]; then
            # fail 30 times, exit without working
            exit 1
        fi

        # Wait a second to retry
        sleep $SLEEP_TIME

        # Restarting portal
        systemctl --user restart plasma-xdg-desktop-portal-kde.service
    fi

    attempt=$((attempt+1))
done


# Fix GTK theme in live mode or first login after install
if [ -e "/livefs-pkgs.txt" ] || [ -n "$BIG_THEME" ]; then
    qdbus org.kde.GtkConfig /GtkConfig org.kde.GtkConfig.setGtkTheme $(grep 'gtk-theme-name=' "$HOME/.config/gtk-3.0/settings.ini" | cut -f2-5 -d=)
fi

