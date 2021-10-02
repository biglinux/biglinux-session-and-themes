#!/bin/bash

OIFS=$IFS
IFS=$'\n'

folder="/usr/share/biglinux/themes"



case "$1" in

    --apply)
	#Confere se o arquivo, diretório, link, ou arquivo especial NÃO existe
    if [ -e "$folder/$2" ]; then
        if [ "$(ps -e | grep kwin)" != "" ]
		then
			plasma-apply-colorscheme $(grep -m1 ColorScheme "$folder/$2/.config/kdeglobals" | cut -f2-5 -d=)
		fi

        cp -Rf $folder/$2/. "$HOME"
        
        # Fix performance
        performance_actual="$(cat "$HOME/.big_performance")"

        if [ "$performance_actual" = "" ] || [ "$performance_actual" = "0" ]; then
            # Animation 1
            kwriteconfig5 --file ~/.config/kwinrc --group Compositing --key AnimationSpeed 3
            kwriteconfig5 --file ~/.config/kdeglobals --group KDE --key AnimationDurationFactor ""
            kwriteconfig5 --file ~/.config/klaunchrc --group BusyCursorSettings --key Blinking false
            kwriteconfig5 --file ~/.config/klaunchrc --group BusyCursorSettings --key Bouncing true

            # Composition on
            kwriteconfig5 --file ~/.config/kwinrc --group Compositing --key Enabled true

            # Opengl 2
            kwriteconfig5 --file ~/.config/kwinrc --group Compositing --key GLCore false
            kwriteconfig5 --file ~/.config/kwinrc --group Compositing --key Backend OpenGL
        fi

        if [ "$performance_actual" = "1" ]; then
            # Animation 2
            kwriteconfig5 --file ~/.config/kwinrc --group Compositing --key AnimationSpeed 1
            kwriteconfig5 --file ~/.config/kdeglobals --group KDE --key AnimationDurationFactor 0.5
            kwriteconfig5 --file ~/.config/klaunchrc --group BusyCursorSettings --key Blinking true
            kwriteconfig5 --file ~/.config/klaunchrc --group BusyCursorSettings --key Bouncing false

            # Composition on
            kwriteconfig5 --file ~/.config/kwinrc --group Compositing --key Enabled true

            # Opengl 2
            kwriteconfig5 --file ~/.config/kwinrc --group Compositing --key GLCore false
            kwriteconfig5 --file ~/.config/kwinrc --group Compositing --key Backend OpenGL
        fi

        if [ "$performance_actual" = "2" ]; then
            # Animation 0
            kwriteconfig5 --file ~/.config/kwinrc --group Compositing --key AnimationSpeed 2
            kwriteconfig5 --file ~/.config/kdeglobals --group KDE --key AnimationDurationFactor 0.25
            kwriteconfig5 --file ~/.config/klaunchrc --group BusyCursorSettings --key Blinking true
            kwriteconfig5 --file ~/.config/klaunchrc --group BusyCursorSettings --key Bouncing false

            # XRender
            kwriteconfig5 --file ~/.config/kwinrc --group Compositing --key Backend XRender
        fi

        echo "$2" > "$HOME/.big_desktop_theme"
        if [ "$XDG_CURRENT_DESKTOP" = "LXQt" ]; then
            openbox --restart
            pcmanfm-qt --desktop-off
            cd $HOME
            pcmanfm-qt --desktop --profile=lxqt &
            exit
        fi
        
        #Fix icon color in smplayer and libreoffice
        if [ "$(echo "$2" | grep -i dark)" = "" ]
		then
            sed -i 's|name="SymbolStyle" oor:op="fuse"><value>.*</value>|name="SymbolStyle" oor:op="fuse"><value>breeze</value>|g' ~/.config/libreoffice/4/user/registrymodifications.xcu
            sed -i 's|^ *\biconset\b *=.*|iconset=Papirus|' ~/.config/smplayer/smplayer.ini
		else
            sed -i 's|name="SymbolStyle" oor:op="fuse"><value>.*</value>|name="SymbolStyle" oor:op="fuse"><value>breeze_dark</value>|g' ~/.config/libreoffice/4/user/registrymodifications.xcu
            sed -i 's|^ *\biconset\b *=.*|iconset=PapirusDark|' ~/.config/smplayer/smplayer.ini
		fi


        #Change blur in real machine
        if [ "$(systemd-detect-virt)" = "none" ]
		then
            sed -i 's|BlurStrength=4|BlurStrength=8|g;s|BlurStrength=3|BlurStrength=8|g' ~/.config/kwinrc
		fi        

        if [ "$(ps -e | grep kwin)" != "" ]
		then
			#Configure kwin
			qdbus org.kde.KWin /KWin org.kde.KWin.reconfigure
			
			#Fix to correct reconfigure kwin
			sleep 1
			qdbus org.kde.kglobalaccel /component/kwin org.kde.kglobalaccel.Component.invokeShortcut "Show Desktop"
			qdbus org.kde.kglobalaccel /component/kwin org.kde.kglobalaccel.Component.invokeShortcut "Show Desktop"
			
			#Configure GTK
			qdbus org.kde.GtkConfig /GtkConfig org.kde.GtkConfig.setGtkTheme $(grep 'gtk-theme-name=' "$HOME/.config/gtk-3.0/settings.ini" | cut -f2-5 -d=)
        fi


   else
        echo "Theme not found."
    fi
    exit
    ;;

    --list)
	for i  in  $(ls $folder); do
        echo "$i"
    done
	exit
    ;;

    *)
	echo " Usage:
	--list
	--apply name-of-theme"
	exit
    ;;

esac



IFS=$OIFS
