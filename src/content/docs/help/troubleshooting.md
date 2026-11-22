---
title: Troubleshooting
description: Fixes for common XONOVA problems – plugin not found, no sound, crackles and high CPU, Linux library errors, Windows SmartScreen.
---

## My DAW doesn't find XONOVA

1. **Rescan plugins** in your DAW after installing.
2. Check the plugin is where your DAW looks – see [Plugin locations](/xonova-docs/reference/files/#plugin-locations).
   - **Windows:** the VST3 must be the whole `XONOVA.vst3` **folder**, in
     `C:\Program Files\Common Files\VST3`.
   - **Linux:** `install.sh` uses `~/.vst3`, `~/.clap` and `~/.lv2`. Some DAWs need these added to their
     plugin paths.
3. Look under the vendor **MBSS** (Monkey Business Sound System), or search for “XONOVA”.
4. Make sure you downloaded the 64-bit build for your system.

## It doesn't load on Linux / “GLIBC not found”

XONOVA needs **glibc 2.35 or newer** (Ubuntu 22.04+, Debian 12+, Fedora 36+, Mint 21+, current Arch). Check
yours with:

```sh
ldd --version
```

Older distributions can't run the current builds.

## Windows says “Windows protected your PC”

The test builds aren't code-signed yet. Click **More info → Run anyway** for `XONOVA.exe`. The plugins load
in your DAW without this.

## No sound

Work through the path, left to right – the **signal lights** next to each section title and the
[Routing page](/xonova-docs/pages/routing/) show where the sound stops.

1. Is a note arriving? The keys in the footer light up and **playing** in the header counts voices.
2. Is at least one **oscillator** (or the noise) switched on with its **Level** up?
3. Is **Filter 1** cutting everything? Check the cutoff, and whether the sources are routed to a filter
   that's on.
4. Is the **amp envelope** shaped sensibly – not a huge **Delay** or **Attack**, and **Sustain** above 0?
   (Amp tab shows which envelope drives the amp.)
5. Is the **Output Level** up?
6. In the **standalone** app: is an output device selected under **Options → Audio/MIDI Settings…**?

Loading **Init** from the preset browser gives you a known-good sound to start from.

## Crackles, dropouts or high CPU

The CPU figure in the header is how much of each audio block XONOVA needs; near 100 % you'll hear dropouts.
The biggest costs, roughly in order:

1. **Unison voices** – each copy is a full oscillator. 8 voices on 3 oscillators is 24 oscillators per note.
2. **Polyphony** – lower it in the header if a patch only needs a few notes.
3. **Filter oversampling** – 4x on both filters is expensive. 2x is usually enough; 1x for soft settings.
4. **Spectral warps** (Spectral Tilt, Formant Shift) under fast modulation.
5. Long **Release** times with many notes – voices keep running until they've faded.

Also try a **larger audio buffer** in your DAW or the standalone settings, and freezing or bouncing tracks you
aren't editing.

## The sound clips or the limiter light is always on

The output safety limiter is catching peaks. Lower the **Output Level**, the oscillator levels or the filter
**Drive**, or reduce **Feedback** and **Resonance**. Stacked unison adds up quickly too.

## The interface is too big or too small

**gear → Interface size**, or drag the window's corner. XONOVA remembers the size for new instances.

## The computer keyboard doesn't play notes

Click on the XONOVA window first so it has focus. Some DAWs keep keys for their own shortcuts; the
standalone app gets them all.

## My hardware knob does nothing

- Check it's assigned: **gear → MIDI controllers** lists every assignment.
- Bank select, sustain and channel-mode messages can't be assigned.
- In a DAW, make sure the track receives MIDI from your controller.

## Still stuck?

See [Reporting problems](/xonova-docs/help/reporting-problems/).
