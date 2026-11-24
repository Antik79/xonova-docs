---
title: Your own wavetables
description: Importing WAV files as wavetables in XONOVA – supported formats, how frames are detected, and the user wavetable folder.
---

Any WAV file can become a wavetable in XONOVA – tables from other synths, single-cycle waveforms, or
your own resampled sounds.

## Importing

1. Click the table name on an oscillator's display.
2. Choose **Import WAV file…** and pick the file.

The table loads straight into that oscillator.

## What XONOVA reads

Mono or stereo, any sample rate, any bit depth. XONOVA works out the frames like this:

| The file… | Is read as |
|---|---|
| has a `clm ` chunk with `<!>N` in it (the common wavetable WAV layout used by many wavetable synths) | frames of **N** samples |
| is shorter than 4096 samples | **one** single-cycle frame |
| is anything else | frames of **2048** samples; an incomplete last frame is dropped |

Frames of any length are resampled exactly as periodic cycles. At most **256 frames** are kept, spread evenly
over the file.

:::tip[Making your own]
Record or resample a sound, trim it so it starts and ends at a zero crossing, and save it with a length that
is a multiple of 2048 samples. Each 2048-sample chunk becomes one frame, and **Position** scans through
them – instant movement from any recording.
:::

## Your tables travel with your projects

An imported table is stored **inside** the preset and the DAW session (compressed). A project or preset
opens anywhere – on another computer, for a collaborator – without the original WAV file.

## The user wavetable folder

WAV files you put in the user wavetable folder are listed in the table menu under **User folder**, for
quick access:

| System | Folder |
|---|---|
| Linux | `~/.local/share/MBSS/XONOVA/Wavetables` (or under `$XDG_DATA_HOME`) |
| Windows | `%APPDATA%\MBSS\XONOVA\Wavetables` |
| macOS | `~/Library/Application Support/MBSS/XONOVA/Wavetables` |

Open it with **gear → Show wavetables folder**, **User folder → Show folder** in the table menu, or the
button on the [Global page](/xonova-docs/pages/global/).
