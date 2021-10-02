#!/usr/bin/env python

import shutil
import subprocess
import os
import tempfile

""" From https://github.com/deviantfero/wpgtk/issues/112 """
"""Runs xsettingsd for a short time to reload gtk3 theme"""
if shutil.which("xsettingsd"):
    fd, path = tempfile.mkstemp()
    try:
        with os.fdopen(fd, 'w+') as tmp:
            tmp.write('Net/ThemeName "Breeze"\n')
            tmp.close()
            subprocess.Popen.wait(subprocess.Popen(["timeout", "0.2s", "xsettingsd", "-c", path]))
    finally:
            os.remove(path)
            


