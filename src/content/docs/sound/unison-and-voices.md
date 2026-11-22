---
title: Unison, voices and glide
description: Polyphony, play modes, glide, pitch-bend range and unison in XONOVA.
---

These settings live on the [Global page](/xonova-docs/pages/global/), except **Polyphony**, which is also
in the header.

## Polyphony and voice stealing

**Polyphony** (1–32, default 16) sets how many notes can sound at once. When you play more notes than
that, XONOVA steals a voice: the oldest released note first, otherwise the quietest one. Stolen voices
fade out in a few milliseconds, so stealing never clicks. Lower the polyphony while notes are sounding and
the excess notes fade out the same way. The sustain pedal is supported in every mode.

## Play mode

| Mode | Behaviour |
|---|---|
| **Poly** | Every note gets its own voice. |
| **Mono** | One voice. Each new note retriggers the envelopes. |
| **Legato** | One voice. Overlapping notes slide without retriggering the envelopes – play legato for smooth basslines, detached for fresh attacks. |

## Glide

| Control | Options |
|---|---|
| **Glide** | 0 to 5000 ms. 0 is off. |
| **Glide when** | **Always**, or **Legato Only** (only when notes overlap). |
| **Glide type** | **Constant Time** – every glide takes the set time, however far it goes. **Constant Rate** – bigger jumps take longer. |

:::tip
For a sliding 808-style or reese bass: **Legato**, Glide around 80–150 ms, **Legato Only**. Overlap the notes
in your sequencer where you want a slide.
:::

## Pitch bend range

**Bend range** sets how far the pitch wheel bends, from 1 to 24 semitones (default 2).

## Unison

Unison stacks up to **8 copies of every oscillator** per voice, each slightly detuned, spread in the stereo
field and, if you like, spread across the wavetable. It applies to all three oscillators.

| Control | What it does |
|---|---|
| **Unison voices** | 1 (off) to 8 copies |
| **Detune** | How far the copies are detuned from each other |
| **Spread curve** | Bends how the detune is distributed: toward the centre (copies close to the main pitch, a focused sound) or toward the edges (a wider, more chorused sound) |
| **Stereo** | How wide the copies are spread left to right |
| **Pos spread** | Spreads the copies across the wavetable around the oscillator's Position, so each plays a slightly different frame |

The copies are mixed so the overall level stays about the same as you add more.

:::caution[CPU]
Unison multiplies the oscillator work by the number of copies: 8 voices of unison on 3 oscillators with
16 notes of polyphony is a lot. If the CPU figure climbs, lower the unison or the polyphony first.
:::

:::tip
For basses, keep **Stereo** modest or use a **Widener** with *Mono bass* in the FX rack so the low end stays
centred on a club system.
:::
