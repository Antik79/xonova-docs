---
title: Installation
description: Download XONOVA and install the VST3, CLAP, LV2 and standalone versions on Linux and Windows.
---

## Download

Every version is published on the releases page:

**[github.com/Antik79/xonova-releases/releases](https://github.com/Antik79/xonova-releases/releases)**

Pick the archive for your system:

| System | File |
|---|---|
| Linux (64-bit) | `XONOVA-<version>-linux-x86_64.tar.gz` |
| Windows (64-bit) | `XONOVA-<version>-windows-x64.zip` |

Once installed, XONOVA tells you itself when a newer version is out (see
[Updates and privacy](/xonova-docs/reference/updates-and-privacy/)).

## Requirements

**Linux**

- 64-bit (x86_64) with **glibc 2.35 or newer**: Ubuntu 22.04+, Debian 12+, Fedora 36+, Linux Mint 21+, and
  current Arch, Manjaro or CachyOS.
- ALSA or JACK for the standalone app. PipeWire works through either.

**Windows**

- 64-bit Windows.

**Both**

- A host that loads VST3 or CLAP (or LV2 on Linux), for example Bitwig Studio, Reaper, FL Studio or
  Ardour.
- The interface scales from 60 % to 200 %, so it fits small laptop screens as well as large monitors.

## Linux

1. Unpack the archive:

   ```sh
   tar xf XONOVA-*-linux-x86_64.tar.gz
   cd XONOVA-*
   ```

2. Run the installer. It installs for your user only and needs no root:

   ```sh
   ./install.sh
   ```

   It copies:

   | What | Where |
   |---|---|
   | VST3 plugin | `~/.vst3/XONOVA.vst3` |
   | CLAP plugin | `~/.clap/XONOVA.clap` |
   | LV2 plugin | `~/.lv2/XONOVA.lv2` |
   | Standalone app | `~/.local/bin/xonova` |

3. Rescan plugins in your DAW.

To remove everything again:

```sh
./install.sh --uninstall
```

:::tip[Installing by hand]
You can also copy `XONOVA.vst3`, `XONOVA.clap` and `XONOVA.lv2` into any plugin folder your DAW scans, and
run `./XONOVA` from the archive for the standalone app.
:::

## Windows

1. Unzip the archive.
2. Copy the **folder** `XONOVA.vst3` to `C:\Program Files\Common Files\VST3`.
3. Copy `XONOVA.clap` to `C:\Program Files\Common Files\CLAP` (create the folder if it doesn't exist).
4. Rescan plugins in your DAW.

The standalone app is `XONOVA.exe`. It can live anywhere, for example on your desktop.

:::caution[“Windows protected your PC”]
Test builds aren't code-signed yet, so Windows SmartScreen may warn the first time you start
`XONOVA.exe`. Click **More info**, then **Run anyway**. The plugins load in your DAW without this warning.
:::

## Finding it in your DAW

XONOVA is an instrument by **MBSS**. Look for it under that vendor name or search for “XONOVA”. If your
DAW lists both VST3 and CLAP, either works; CLAP hosts get the same sound and parameters.

## The standalone app

The standalone app is XONOVA without a DAW: handy for sound design and for trying presets. Click
**Options** at the top left to choose your audio device, sample rate, buffer size and MIDI inputs. You can
play it with a MIDI keyboard, the on-screen keys or your computer keyboard (see
[Playing XONOVA](/xonova-docs/midi/playing/)).

## Next

[Make your first sound →](/xonova-docs/getting-started/first-sound/)
