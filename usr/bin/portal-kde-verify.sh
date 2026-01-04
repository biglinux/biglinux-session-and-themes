#!/bin/bash
#
# portal-kde-verify.sh - XDG Desktop Portal Service Verifier
#
# Ensures the xdg-desktop-portal-gtk service is active for KDE Plasma.
# Retries activation for up to 30 seconds if the service is not running.
#
# This is needed because some KDE applications require the GTK portal
# for proper file dialogs and other desktop integration features.
#

SERVICE_NAME="xdg-desktop-portal-gtk.service"
TOTAL_WAIT_TIME=30
SLEEP_INTERVAL=2
TIME_PASSED=0

# Initial delay to allow desktop session to stabilize
sleep $SLEEP_INTERVAL

# Check if the service is already active
if ! systemctl --user is-active "$SERVICE_NAME" > /dev/null; then
    # Retry activation loop
    while [[ $TIME_PASSED -lt $TOTAL_WAIT_TIME ]]; do
        # Restart the main portal service which may trigger GTK portal
        systemctl --user restart xdg-desktop-portal.service

        # Check if target service is now active
        if systemctl --user is-active "$SERVICE_NAME" > /dev/null; then
            echo "Service $SERVICE_NAME is now active."
            exit 0
        fi

        sleep $SLEEP_INTERVAL
        TIME_PASSED=$((TIME_PASSED + SLEEP_INTERVAL))
    done

    echo "Failed to activate $SERVICE_NAME within $TOTAL_WAIT_TIME seconds."
    exit 1
else
    echo "Service $SERVICE_NAME is already active."
    exit 0
fi
