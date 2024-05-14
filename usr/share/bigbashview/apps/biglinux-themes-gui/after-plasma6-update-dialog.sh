#!/usr/bin/env bash

#Translation
export TEXTDOMAINDIR="/usr/share/locale"
export TEXTDOMAIN=biglinux-session-and-themes

Title=$"Temas e Desktop"

cd /usr/share/bigbashview/apps/biglinux-themes-gui/
bigbashview -s 900x700 -n 'biglinuxthemesgui' -p 'biglinuxthemesgui' -c transparent -w frameless after-plasma6-update-dialog.html
