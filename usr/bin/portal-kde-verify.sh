#!/bin/bash

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
