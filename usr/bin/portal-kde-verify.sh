#!/bin/bash

SERVICE_NAME="xdg-desktop-portal-gtk.service"
TOTAL_WAIT_TIME=30
SLEEP_INTERVAL=2
TIME_PASSED=0

sleep $SLEEP_INTERVAL

# Check if the service is already active
if ! systemctl --user is-active $SERVICE_NAME > /dev/null; then
    # Try to activate the service in a loop
    while [ $TIME_PASSED -lt $TOTAL_WAIT_TIME ]; do
        # Restart the xdg-desktop-portal service
        systemctl --user restart xdg-desktop-portal.service

        # Check if the service is active
        if systemctl --user is-active $SERVICE_NAME > /dev/null; then
            echo "Service $SERVICE_NAME is now active."
            exit 0
        fi

        # Wait 2 seconds before the next attempt
        sleep $SLEEP_INTERVAL

        # Increment the elapsed time
        TIME_PASSED=$((TIME_PASSED + SLEEP_INTERVAL))
    done

    echo "Failed to activate $SERVICE_NAME within $TOTAL_WAIT_TIME seconds."
    exit 1
else
    echo "Service $SERVICE_NAME is already active."
    exit 0
fi
