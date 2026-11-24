---
title: Installation
description: Download XONOVA and install the VST3, CLAP, LV2, Audio Unit and standalone versions on Linux, Windows and macOS.
---

## Download

Every version is published on the releases page:

**[github.com/Antik79/xonova-releases/releases](https://github.com/Antik79/xonova-releases/releases)**

Pick the archive for your system:

| System | File |
|---|---|
| Linux (64-bit) | `XONOVA-<version>-linux-x86_64.tar.gz` |
| Windows (64-bit) | `XONOVA-<version>-windows-x64.zip` |
| macOS (Apple Silicon) | `XONOVA-<version>-macos-arm64.zip` |

Once installed, XONOVA tells you itself when a newer version is out (see
[Updates and privacy](/xonova-docs/reference/updates-and-privacy/)).

:::tip[Support Monkey Business Soundsystem]
XONOVA is free. If you enjoy it and want to support the people behind it, visit
**[mbss.be](https://www.mbss.be)** – Monkey Business Soundsystem, the Belgian jungle, drum & bass and
breakbeat crew behind XONOVA. Donations are very welcome and help keep XONOVA going.
:::

## Requirements

**Linux**

- 64-bit (x86_64) with **glibc 2.35 or newer**: Ubuntu 22.04+, Debian 12+, Fedora 36+, Linux Mint 21+, and
  current Arch, Manjaro or CachyOS.
- ALSA or JACK for the standalone app. PipeWire works through either.

**Windows**

- 64-bit Windows.

**macOS**

- A Mac with Apple Silicon (M1 or newer) and macOS 11 Big Sur or newer. There is no build for Intel Macs.

**All systems**

- A host that loads VST3 or CLAP (or LV2 on Linux, Audio Unit on macOS), for example Bitwig Studio,
  Reaper, Ableton Live, Logic Pro, FL Studio or Ardour.
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

## macOS

XONOVA isn't signed by Apple yet, so macOS blocks plugins downloaded from the internet (it may call them
"damaged"). The included installer takes care of that.

1. Unzip the download (Safari usually does this for you).
2. Open **Terminal** (Applications → Utilities), type `bash` and a space, drag `install.sh` from the
   XONOVA folder into the Terminal window and press **Return**.

   It installs for your user only and needs no password:

   | What | Where |
   |---|---|
   | Audio Unit | `~/Library/Audio/Plug-Ins/Components/XONOVA.component` |
   | VST3 plugin | `~/Library/Audio/Plug-Ins/VST3/XONOVA.vst3` |
   | CLAP plugin | `~/Library/Audio/Plug-Ins/CLAP/XONOVA.clap` |
   | Standalone app | `~/Applications/XONOVA.app` |

   It also removes macOS's "downloaded from the internet" mark from these files (and only these).

3. Restart your DAW or rescan plugins. Logic Pro and GarageBand use the Audio Unit.

To remove everything again, run `bash install.sh --uninstall` the same way.

:::tip[Installing by hand]
Copy the four items to the folders above yourself, then remove the mark in Terminal:
`xattr -dr com.apple.quarantine ~/Library/Audio/Plug-Ins/*/XONOVA.* ~/Applications/XONOVA.app`
:::

## Finding it in your DAW

XONOVA is an instrument by **Monkey Business Soundsystem**. In your DAW's plugin list the vendor is shown
as **MBSS**: look for it there, or search for “XONOVA”. If your
DAW lists both VST3 and CLAP, either works; CLAP hosts get the same sound and parameters.

## The standalone app

The standalone app is XONOVA without a DAW: handy for sound design and for trying presets. Click
**Options** at the top left to choose your audio device, sample rate, buffer size and MIDI inputs. You can
play it with a MIDI keyboard, the on-screen keys or your computer keyboard (see
[Playing XONOVA](/xonova-docs/midi/playing/)).

## Next

[Make your first sound →](/xonova-docs/getting-started/first-sound/)
