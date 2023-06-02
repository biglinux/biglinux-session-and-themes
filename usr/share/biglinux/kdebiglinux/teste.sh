#!/bin/bash

# Define o caminho para o arquivo
# file=~/.config/plasma-org.kde.plasma.desktop-appletsrc
# file=~/.config/latte/Default.layout.latte

file="$1"
# Verifica se o arquivo existe
if [ -f "$file" ]; then
    sed -i '/^hiddenItems=/ { /org\.kde\.plasma\.battery/! s/$/,org.kde.plasma.battery/ }'  "$file"
    sed -i '/^shownItems=/ s/,org\.kde\.plasma\.battery//' "$file"
    sed -i '/^extraItems=/ s/,org\.kde\.plasma\.battery//' "$file"
    sed -i '/^shownItems=/ { /org\.biglinux\.batteryandperformance/! s/$/,org.biglinux.batteryandperformance/ }' "$file"
fi
