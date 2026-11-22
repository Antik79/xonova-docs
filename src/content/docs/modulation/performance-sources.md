---
title: Performance sources
description: Velocity, note, random, poly pressure, mod wheel, aftertouch, pitch bend and timbre (CC 74) as modulation sources in XONOVA.
---

Besides envelopes, LFOs, sequencers and macros, XONOVA can use how you **play** as a modulation source.
Six of them have chips under the Macros panel that you can drag onto any knob: **Vel**, **Note**,
**Wheel**, **AT**, **Rand** and **Bend**. All of them, plus **Poly Pressure** and **Timbre**, are available
on the [Matrix page](/xonova-docs/modulation/matrix/).

## Per note

| Source | Chip | Range | What it is |
|---|---|---|---|
| **Velocity** | Vel | 0 → 1 | How hard the note was played |
| **Note** | Note | −1 → 1, centred on C3 (MIDI note 60) | The note's pitch – higher notes give higher values. Use it to make high notes brighter or shorter. |
| **Random** | Rand | −1 → 1 | A new random value for every note – subtle variation like a real instrument |
| **Poly Pressure** | – | 0 → 1 | Per-note aftertouch, from keyboards and MPE controllers that send it |

## Per channel (all notes)

| Source | Chip | Range | What it is |
|---|---|---|---|
| **Mod Wheel** | Wheel | 0 → 1 | CC 1, or the on-screen mod wheel |
| **Aftertouch** | AT | 0 → 1 | Channel pressure |
| **Pitch Bend** | Bend | −1 → 1 | The pitch wheel. It also bends pitch by the **Bend range**; routing it adds more uses. |
| **Timbre (CC 74)** | – | 0 → 1 | The “slide” dimension on MPE controllers, or any controller sending CC 74 |

:::tip
- **Velocity → Filter Cutoff** and **Velocity → Osc Position**: harder notes, brighter tone.
- **Mod Wheel → Scale by** on a vibrato LFO routing: vibrato only when you push the wheel.
- **Random → Osc Fine** at a few cents: a gently drifting, analog-like feel.
:::
