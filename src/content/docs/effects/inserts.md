---
title: Inserts
description: XONOVA's two per-voice inserts – bitcrusher, waveshaper, frequency shifter, sine shaper, delay comb and EQ band – and where to place them.
---

**Inserts** are effects that run **inside every voice**, in the middle of the filter section. Because each
note is processed on its own, distortion and bitcrushing stay clean on chords, and an insert placed between
or after the filters becomes part of the synth's tone – even part of the filter feedback loop.

XONOVA has two inserts, **Insert 1** and **Insert 2**. You'll find them on the [FX page](/xonova-docs/pages/fx/)
and as blocks on the [Routing page](/xonova-docs/pages/routing/).

## Controls

| Control | What it does |
|---|---|
| **Type** | The effect (below). **None** switches the insert off. |
| **Position** | Where in the voice it runs (below). |
| **Mix** | Dry/wet balance. Default 100 %. |
| Three parameters | Change with the type. |

Changing the type fades the effect out and back in over a few milliseconds, so it never clicks.

## Positions

| Position | Runs | Default for |
|---|---|---|
| **Pre F1** | Before Filter 1 – on everything sent to Filter 1 | |
| **Post F1** | After Filter 1 | Insert 1 |
| **Pre F2** | Before Filter 2 – on what reaches Filter 2 | |
| **Post Filters** | After both filters, **inside** the feedback loop | Insert 2 |

:::tip
Distortion **before** a filter is tamed by it – smooth and warm. Distortion **after** a filter is raw and
buzzy. With filter feedback turned up, a **Post Filters** insert shapes the feedback too: a frequency
shifter there makes spiralling, barber-pole tones.
:::

## Types

| Type | Param 1 | Param 2 | Param 3 | Character |
|---|---|---|---|---|
| **Bitcrusher** | **Bits** – 16 down to 1 | **Rate** – sample-rate reduction, 1x to 64x | **Tone** | Lo-fi, aliasing, digital grit |
| **Waveshaper** | **Drive** – 0 to 36 dB | **Curve** – soft, hard, fold, rectify | **Bias** – asymmetry | Saturation through to harsh fold-over |
| **Frequency Shifter** | **Shift** – −2 to +2 kHz (centre = none) | **Feedback** | **Stereo** – phase offset between channels, 0–180° | Inharmonic, metallic, detuned motion |
| **Sine Shaper** | **Drive** | **Bias** | **Tone** | Smooth, wavefolding sine distortion – rich, bell-like overtones |
| **Delay Comb** | **Time** – 0.1 to 20 ms | **Feedback** – negative or positive | **Damping** | Flanging, metallic resonances, short tuned echoes |
| **EQ Band** | **Frequency** – 20 Hz to 20 kHz | **Gain** – −18 to +18 dB | **Q** – 0.3 to 12 | A bell EQ per voice: boost a formant, notch out mud |

The waveshaper and sine shaper run at twice the sample rate internally to keep aliasing down.

All insert parameters, including Mix, are modulation targets – an envelope on **Bits** or **Shift** gives
each note its own movement.
