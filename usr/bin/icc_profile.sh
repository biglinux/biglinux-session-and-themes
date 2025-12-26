#!/bin/bash
#
# ICC Profile Configuration Script
# Enables or disables ICC color profile in KWin output configuration
#
# Usage: icc_profile.sh enable|disable
#
# Requires: jaq (JSON processor)
#

CONFIG_FILE="$HOME/.config/kwinoutputconfig.json"
ICC_PROFILE_PATH="/usr/share/color/icc/colord/ECI-RGBv1.icc"

show_usage() {
    echo "Usage: $0 enable|disable"
    echo "  enable  - Set colorProfileSource to ICC (use color profile)"
    echo "  disable - Set colorProfileSource to sRGB (standard RGB)"
    exit 1
}

# Check for jaq
if ! command -v jaq &> /dev/null; then
    echo "Error: jaq is required but not installed"
    exit 1
fi

# Check if config file exists
if [ ! -f "$CONFIG_FILE" ]; then
    echo "Error: KWin output config not found at $CONFIG_FILE"
    exit 1
fi

# Parse argument
case "$1" in
    enable)
        COLOR_SOURCE="ICC"
        ;;
    disable)
        COLOR_SOURCE="sRGB"
        ;;
    *)
        show_usage
        ;;
esac

# Apply configuration
jaq -i "map(
  if .data then
    .data |= map(
      if has(\"edidHash\") then
        .iccProfilePath = \"$ICC_PROFILE_PATH\"
        | .colorProfileSource = \"$COLOR_SOURCE\"
      else
        .
      end
    )
  else
    .
  end
)" "$CONFIG_FILE"

echo "ICC profile $1d successfully"
