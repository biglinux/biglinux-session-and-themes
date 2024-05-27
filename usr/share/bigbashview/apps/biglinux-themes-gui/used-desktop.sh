#!/bin/bash

if [ -e "$HOME/.kdebiglinux/$1" ]; then
    echo true
else
    echo false
fi
