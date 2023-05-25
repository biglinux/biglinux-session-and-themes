#!/bin/bash

OIFS=$IFS
IFS=$'\n'

folder="/usr/share/biglinux/themes"



case "$1" in

    --apply)

    rm -Rf ~/.cache/plasma*
    rm -Rf ~/.cache/kwin
    rm -Rf ~/.cache/gtk-3.0
    rm -Rf ~/.cache/gtk-4.0
    rm -Rf ~/.cache/icon-cache.kcache
    rm -R ~/.cache/kcmshell5


	#Confere se o arquivo, diretório, link, ou arquivo especial NÃO existe
    if [ -e "$folder/$2" ]; then
        cp -Rf $folder/$2/. "$HOME"

        #Fix icon color in smplayer and libreoffice
        if [ "$(echo "$2" | grep -i dark)" = "" ]
		then
            sed -i 's|name="SymbolStyle" oor:op="fuse"><value>.*</value>|name="SymbolStyle" oor:op="fuse"><value>breeze</value>|g' ~/.config/libreoffice/4/user/registrymodifications.xcu
            sed -i 's|^ *\biconset\b *=.*|iconset=Papirus|' ~/.config/smplayer/smplayer.ini
		else
            sed -i 's|name="SymbolStyle" oor:op="fuse"><value>.*</value>|name="SymbolStyle" oor:op="fuse"><value>breeze_dark</value>|g' ~/.config/libreoffice/4/user/registrymodifications.xcu
            sed -i 's|^ *\biconset\b *=.*|iconset=PapirusDark|' ~/.config/smplayer/smplayer.ini
		fi

        #se necessario coloca os icons de fechar, maximizar e fechar do lado esquerdo
        if [ "$(cat "$HOME/.config/kwin_left")" = "1" ]; then
            kwriteconfig5 --file ~/.config/gtk-3.0/settings.ini --group Settings --key "gtk-decoration-layout" "close,maximize,minimize:menu"
            kwriteconfig5 --group "org.kde.kdecoration2" --key "ButtonsOnLeft" --file "$HOME/.config/kwinrc" "XIA"
            kwriteconfig5 --group "org.kde.kdecoration2" --key "ButtonsOnRight" --file "$HOME/.config/kwinrc" "FSM"
        else
            kwriteconfig5 --file ~/.config/gtk-3.0/settings.ini --group Settings --key "gtk-decoration-layout" "menu:minimize,maximize,close"
            kwriteconfig5 --group "org.kde.kdecoration2" --key "ButtonsOnLeft" --file "$HOME/.config/kwinrc" "MSF"
            kwriteconfig5 --group "org.kde.kdecoration2" --key "ButtonsOnRight" --file "$HOME/.config/kwinrc" "IAX"
        fi

        # Disable kwin border in maximized windows
        if [ "$(cat "$HOME/.config/kwin_maximized_disable")" = "1" ]; then
            #Chromium Brave Chrome
            sed -i 's|"custom_chrome_frame":true|"custom_chrome_frame":false|g' ~/.config/chromium/Default/Preferences ~/.config/google-chrome/Default/Preferences ~/.config/BraveSoftware/Brave-Browser/Default/Preferences
            #Firefox
            sed -i 's|user_pref("browser.tabs.InTitlebar", 1);|user_pref("browser.tabs.InTitlebar", 0);|g' ~/.mozilla/firefox/*.default/prefs.js
            #Kwin
            kwriteconfig5 --file ~/.config/kwinrc --group Windows --key BorderlessMaximizedWindows true
        else
            #Chromium Brave Chrome
            sed -i 's|"custom_chrome_frame":false|"custom_chrome_frame":true|g' ~/.config/chromium/Default/Preferences ~/.config/google-chrome/Default/Preferences ~/.config/BraveSoftware/Brave-Browser/Default/Preferences
            #Firefox
            sed -i 's|user_pref("browser.tabs.InTitlebar", 0);|user_pref("browser.tabs.InTitlebar", 1);|g' ~/.mozilla/firefox/*.default/prefs.js
            #Kwin
            kwriteconfig5 --file ~/.config/kwinrc --group Windows --key BorderlessMaximizedWindows false
        fi

        if [ "$(ps -e | grep kwin)" != "" ]
		then

                #Configure GTK
                qdbus org.kde.GtkConfig /GtkConfig org.kde.GtkConfig.setGtkTheme $(grep 'gtk-theme-name=' "$HOME/.config/gtk-3.0/settings.ini" | cut -f2-5 -d=)


                # Clean icon theme and apply again to fix kwin buttons
#                 kwriteconfig5 --group Icons --key Theme ""
                /usr/lib/plasma-changeicons $(kreadconfig5 --group Icons --key Theme --file "$folder/$2/.config/kdeglobals")
                
                # Change theme color to change back and fix on the fly change
                plasma-apply-colorscheme Arc
                
                # Apply Theme
                plasma-apply-colorscheme $(grep -m1 ColorScheme "$folder/$2/.config/kdeglobals" | cut -f2-5 -d=)

		
                 qdbus org.kde.KWin /KWin org.kde.KWin.reconfigure

        fi
        
        
        #Fluent theme without blur using llvmpipe to 3D render
#         if [ "$2" = "fluent" ] && [ "$(glxinfo | grep llvmpipe)" != "" ]; then
#             sed -i 's|Fluent-round|Fluent-roundsw|g' ~/.config/Kvantum/kvantum.kvconfig
#         fi
#         
#         if [ "$2" = "fluent-dark" ] && [ "$(glxinfo | grep llvmpipe)" != "" ]; then
#             sed -i 's|Fluent-roundDark|Fluent-roundswDark|g' ~/.config/Kvantum/kvantum.kvconfig        
#         fi
        
        echo "$2" > "$HOME/.big_desktop_theme"        
        
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
