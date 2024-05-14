#!/usr/bin/env bash

#Translation
export TEXTDOMAINDIR="/usr/share/locale"
export TEXTDOMAIN=biglinux-session-and-themes

Title=$"Temas e Desktop"

# Copy igLinux Dark.colorscheme
if [[ ! -e "$HOME/.local/share/konsole/BigLinux Dark.colorscheme" ]]; then
    cp "/etc/skel/.local/share/konsole/BigLinux Dark.colorscheme" "$HOME/.local/share/konsole/BigLinux Dark.colorscheme"
fi

# Copy Bash.profile
if [[ ! -e "$HOME/.local/share/konsole/Bash.profile" ]]; then
    cp "/etc/skel/.local/share/konsole/Bash.profile" "$HOME/.local/share/konsole/Bash.profile"
fi

# BKP plasmoids
mv "$HOME/.local/share/plasma/plasmoids/" "$HOME/.local/share/plasma/plasmoids-old/"

cd /usr/share/bigbashview/apps/biglinux-themes-gui/
bigbashview -s 900x700 -n 'biglinuxthemesgui' -p 'biglinuxthemesgui' -c transparent -w frameless after-plasma6-update-dialog.html
