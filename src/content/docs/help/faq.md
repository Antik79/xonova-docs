---
title: FAQ
description: Frequently asked questions about XONOVA – price, platforms, formats, CPU, presets and more.
---

## Is XONOVA free?

Yes. Download it for free from the [releases page](https://github.com/Antik79/xonova-releases/releases).
It isn't open source; the licence comes with every download.

## How can I support Monkey Business Soundsystem?

Visit [mbss.be](https://www.mbss.be) – their events, music and artists. If XONOVA is useful to you,
a donation to Monkey Business Soundsystem is very welcome and helps keep it going.

## Which DAWs does it work in?

It's built for any host that loads **VST3** or **CLAP**, and on Linux also **LV2** – Bitwig Studio, Reaper,
FL Studio, Ardour and the like. It's tested on Linux hosts and in FL Studio on Windows; if you hit a problem
in another DAW, please [report it](/xonova-docs/help/reporting-problems/). If your DAW lists both VST3 and
CLAP, either works.

## Is there a Mac version?

Yes, for Macs with **Apple Silicon** (M1 and newer, macOS 11+): Audio Unit, VST3, CLAP and the standalone
app. It isn't signed by Apple yet, so install it with the included installer; see
[Installation → macOS](/xonova-docs/getting-started/installation/#macos).

## Is there an AU or AAX version?

Audio Unit: yes, on macOS. AAX (Pro Tools): no.

## Does it work on Intel Macs / ARM Linux / 32-bit Windows?

No. The downloads are for 64-bit **x86** (Intel/AMD) Linux and Windows, and for Apple Silicon Macs.

## Why is the CPU figure high?

Unison, polyphony and 4x filter oversampling multiply the work. See
[Troubleshooting → High CPU](/xonova-docs/help/troubleshooting/#crackles-dropouts-or-high-cpu).

## Will updates break my projects?

No. Parameter ids never change, presets and sessions keep working, and imported wavetables are stored inside
your projects. See [Updates and privacy](/xonova-docs/reference/updates-and-privacy/).

## Can I use presets made by someone else?

Yes: drop their `.xnpreset` file into the matching category folder in your presets folder. See
[Saving and sharing presets](/xonova-docs/presets/saving/#sharing).

## Can I use wavetables from other synths?

Yes. XONOVA reads standard wavetable WAV files, including the common `clm ` frame-size layout. See
[Your own wavetables](/xonova-docs/wavetables/import/).

## Does XONOVA phone home?

Only to check GitHub for a newer version once a day, and you can switch it off. No personal data is sent.
See [Updates and privacy](/xonova-docs/reference/updates-and-privacy/).

## Is it MPE compatible?

XONOVA responds to per-note pressure (poly aftertouch), channel pressure, pitch bend and CC 74 (timbre), and
you can route all of them through the [modulation matrix](/xonova-docs/modulation/performance-sources/).

## Who makes XONOVA?

XONOVA is made by **Monkey Business Soundsystem** ([mbss.be](https://www.mbss.be)), with jungle and
ragga-jungle producers in mind.
