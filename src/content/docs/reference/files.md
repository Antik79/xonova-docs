---
title: Files and folders
description: Where XONOVA keeps your presets, wavetables, favourites, settings and MIDI mappings on Linux and Windows.
---

XONOVA keeps everything that belongs to **you** in one folder:

| System | Folder |
|---|---|
| Linux | `~/.local/share/MBSS/XONOVA` |
| Windows | `%APPDATA%\MBSS\XONOVA` (usually `C:\Users\<you>\AppData\Roaming\MBSS\XONOVA`) |

## Contents

| File or folder | Contains |
|---|---|
| `Presets/` | Your presets (`.xnpreset`), in a subfolder per category |
| `Wavetables/` | WAV files listed under **User folder** in the table menu |
| `Favourites.txt` | Your favourite presets |
| `Settings.xml` | Interface size, animation, update checks |
| `MidiMappings.xml` | Your default MIDI learn assignments |

Factory presets and wavetables are built into the plugin itself, so they're never in this folder and can't
get lost.

## Backing up and moving to another computer

Copy the whole folder. On the new computer, install XONOVA, then put the folder back in the same place.

## Plugin locations

Where the installer puts the plugins:

| | Linux (`install.sh`) | Windows |
|---|---|---|
| VST3 | `~/.vst3/XONOVA.vst3` | `C:\Program Files\Common Files\VST3\XONOVA.vst3` |
| CLAP | `~/.clap/XONOVA.clap` | `C:\Program Files\Common Files\CLAP\XONOVA.clap` |
| LV2 | `~/.lv2/XONOVA.lv2` | – |
| Standalone | `~/.local/bin/xonova` | `XONOVA.exe`, wherever you put it |
