---
title: Output
description: XONOVA's output section – three-band EQ, output level, preset volume and the safety limiter.
---

The **Output** section is the last stage before XONOVA hands the sound to your DAW. It's at the bottom right
of the [FX page](/xonova-docs/pages/fx/).

| Control | Range | What it does |
|---|---|---|
| **Low** | ±12 dB | Low shelf at 200 Hz |
| **Mid** | ±12 dB | Peak at the **Mid freq** |
| **Mid freq** | 200 Hz – 5 kHz | Centre of the mid band |
| **High** | ±12 dB | High shelf at 5 kHz |
| **Level** | −60 to +6 dB | Output level. Also in the header. 0 dB sits at three quarters of the travel, so the last quarter is boost. |
| **Safety limiter** | On / off | Catches peaks before they leave XONOVA. On by default. |

## Safety limiter

High resonance, feedback and stacked unison can produce sudden, very loud peaks. The safety limiter keeps
them from hurting your ears and speakers. The dot next to the output meter in the header lights up while it
is working. If it lights constantly, lower the **Level** or the patch's gain rather than relying on the
limiter.

Switch it off only if you want the raw output, for example to feed your own limiter in the DAW.

## Matched preset loudness

The factory presets are loudness-matched: each one carries its own hidden volume trim, so stepping through
presets doesn't make you jump, and your **Level** stays where you put it.
