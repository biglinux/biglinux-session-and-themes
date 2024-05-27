#!/usr/bin/env bash

#Translation
export TEXTDOMAINDIR="/usr/share/locale"
export TEXTDOMAIN=biglinux-session-and-themes

Title=$"BigLinux Themes"

# Copy igLinux Dark.colorscheme
if [[ ! -e "$HOME/.local/share/konsole/BigLinux Dark.colorscheme" ]]; then
    cp "/etc/skel/.local/share/konsole/BigLinux Dark.colorscheme" "$HOME/.local/share/konsole/BigLinux Dark.colorscheme"
fi

# Copy Bash.profile
if [[ ! -e "$HOME/.local/share/konsole/Bash.profile" ]]; then
    cp "/etc/skel/.local/share/konsole/Bash.profile" "$HOME/.local/share/konsole/Bash.profile"
fi

# rm fontconfig
if [ "$(md5sum /$HOME/.config/fontconfig/fonts.conf | awk '{print $1}')" = "2b2261e776f4126b41418cf695488cf5" ];then
    rm /$HOME/.config/fontconfig/fonts.conf
fi

# Remove link from latte-dock
if [ -L ~/.local/share/plasma/plasmoids/org.kde.plasma.systemtray ];then
  rm ~/.local/share/plasma/plasmoids/org.kde.plasma.systemtray
fi
if [ -L ~/.local/share/plasma/plasmoids/org.kde.plasma.private.systemtray ];then
  rm ~/.local/share/plasma/plasmoids/org.kde.plasma.private.systemtray
fi

# BKP plasmoids
mv "$HOME/.local/share/plasma/plasmoids/" "$HOME/.local/share/plasma/plasmoids-old/"

cd /usr/share/bigbashview/apps/biglinux-themes-gui/
bigbashview -s 900x700 -n 'biglinuxthemesgui' -p 'biglinuxthemesgui' -c transparent -w frameless after-plasma6-update-dialog.html
