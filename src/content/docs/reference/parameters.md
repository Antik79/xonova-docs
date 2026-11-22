---
title: Parameter reference
description: Every automatable parameter in XONOVA with its range and default, grouped as your DAW shows them.
---

These are the parameters your DAW sees for automation, in the groups it shows them. Names in a DAW are
prefixed with their section, for example *Osc 1 Position* or *Filter 2 Cutoff*.

Modulation structure – which source goes to which target, curves, sequencer steps, drawn shapes, macro names
and wavetable choices – isn't automatable; it's saved with the preset and session.

## Global

| Parameter | Range | Default |
|---|---|---|
| Polyphony | 1 – 32 | 16 |
| Play Mode | Poly, Mono, Legato | Poly |
| Glide Time | 0 – 5000 ms | 0 ms |
| Glide Mode | Always, Legato Only | Always |
| Glide Type | Constant Time, Constant Rate | Constant Time |
| Unison Voices | 1 – 8 | 1 |
| Unison Detune | 0 – 100 % | 20 % |
| Unison Detune Curve | −100 – +100 % | 0 % |
| Unison Stereo Spread | 0 – 100 % | 50 % |
| Unison Position Spread | 0 – 100 % | 0 % |
| Pitch Bend Range | 1 – 24 st | 2 st |

## Osc 1, Osc 2, Osc 3

| Parameter | Range | Default |
|---|---|---|
| On | Off / On | On for Osc 1, off for Osc 2 and 3 |
| Position | 0 – 100 % | 0 % |
| Warp 1 Mode, Warp 2 Mode | Off, Spectral Tilt, Phase Bend +, Phase Bend −, Phase Bend +/−, Formant Shift, Hard Sync, Asymmetry | Off |
| Warp 1 Amount, Warp 2 Amount | 0 – 100 % | 0 % |
| Octave | −4 – +4 oct | 0 |
| Semitone | −12 – +12 st | 0 |
| Fine | −100 – +100 ct | 0 |
| Phase Mode | Free, Fixed, Random | Fixed |
| Phase | 0 – 360° | 0° |
| Level | 0 – 100 % | 80 % |
| Pan | −100 – +100 % | 0 % |
| Filter Route | 0 % (F1) – 100 % (F2) | 0 % |

## Mod Osc

| Parameter | Range | Default |
|---|---|---|
| On | Off / On | Off |
| Shape | Sine, Triangle, Saw, Square | Sine |
| Pitch Mode | Key Ratio, Fixed | Key Ratio |
| Ratio | 0.125 – 16 x | 1 x |
| Fixed Frequency | 0.1 – 5000 Hz | 100 Hz |
| Fine | −100 – +100 ct | 0 |
| Osc 1/2/3 Mode | Off, Ring, Phase, Position | Off |
| Osc 1/2/3 Amount | 0 – 100 % | 0 % |
| Filter 1 FM, Filter 2 FM | 0 – 100 % | 0 % |

## Noise

| Parameter | Range | Default |
|---|---|---|
| On | Off / On | Off |
| Type | White, Pink, Filtered, Crackle | White |
| Color | 0 – 100 % | 50 % |
| Level | 0 – 100 % | 50 % |
| Filter Route | 0 % (F1) – 100 % (F2) | 0 % |

## Feedback and filters

| Parameter | Range | Default |
|---|---|---|
| Feedback Amount | 0 – 100 % | 0 % |
| Feedback Tap | Post F1, Post Mix | Post Mix |
| Filters Serial/Parallel | 0 % (serial) – 100 % (parallel) | 0 % |

**Filter 1, Filter 2**

| Parameter | Range | Default |
|---|---|---|
| On | Off / On | On for Filter 1, off for Filter 2 |
| Type | Ladder LP 24, SVF LP 12, SVF BP 12, SVF HP 12, SVF Notch 12, LP 6, HP 6, Comb +, Comb −, Formant, Scream BP, Allpass | Ladder LP 24 |
| Cutoff | 20 Hz – 20 kHz | 20 kHz |
| Resonance | 0 – 100 % | 0 % |
| Character | 0 – 100 % | 50 % |
| Key Track | −100 – +100 % | 0 % |
| Drive | 0 – 100 % | 0 % |
| Level | 0 – 100 % | 100 % |
| Oversampling | 1x, 2x, 4x | 2x |

## Inserts

**Insert 1, Insert 2**

| Parameter | Range | Default |
|---|---|---|
| Type | None, Bitcrusher, Waveshaper, Frequency Shifter, Sine Shaper, Delay Comb, EQ Band | None |
| Position | Pre F1, Post F1, Pre F2, Post Filters | Post F1 (Insert 1), Post Filters (Insert 2) |
| Mix | 0 – 100 % | 100 % |
| Param 1, 2, 3 | 0 – 100 % (meaning depends on the type – see [Inserts](/xonova-docs/effects/inserts/)) | 50 % |

## FX 1 – FX 8

| Parameter | Range | Default |
|---|---|---|
| On | Off / On | On |
| Type | None, Chorus, Flanger, Phaser, Delay, Reverb, Saturator, Widener | None |
| Mix | 0 – 100 % | 30 % |
| Param 1, 2, 3 | 0 – 100 % (meaning depends on the type – see [FX rack](/xonova-docs/effects/fx-rack/)) | 50 % |

## Output

| Parameter | Range | Default |
|---|---|---|
| EQ Low, EQ Mid, EQ High | −12 – +12 dB | 0 dB |
| EQ Mid Frequency | 200 – 5000 Hz | 1000 Hz |
| Level | −60 – +6 dB | 0 dB |
| Limiter | Off / On | On |

## Env 1 – Env 4

| Parameter | Range | Default (Env 1–3) | Default (Env 4) |
|---|---|---|---|
| Delay | 0 – 10 000 ms | 0 ms | 0 ms |
| Attack | 0 – 20 000 ms | 10 ms | 2 ms |
| Hold | 0 – 10 000 ms | 0 ms | 0 ms |
| Decay | 0 – 20 000 ms | 300 ms | 300 ms |
| Sustain | 0 – 100 % | 70 % | 100 % |
| Release | 0 – 20 000 ms | 300 ms | 30 ms |
| Attack / Decay / Release Curve | −100 – +100 % | 0 % | 0 % |
| Loop Mode | Off, Sustain Loop, Free Loop | Off | Off |
| Loop Start | Delay, Attack, Hold, Decay | Attack | Attack |
| Loop End | Delay, Attack, Hold, Decay | Decay | Decay |
| Velocity Sensitivity | 0 – 100 % | 0 % | 50 % |
| Shape Mode | Classic, Custom | Classic | Classic |

## LFO 1 – LFO 4

| Parameter | Range | Default |
|---|---|---|
| Shape | Sine, Triangle, Saw Up, Saw Down, Square, Sample & Hold, Smooth Random, Wavetable, Custom | Sine |
| Rate | 0.01 – 100 Hz | 2 Hz |
| Tempo Sync | Off / On | Off |
| Sync Division | 8/1 … 1/64 (incl. dotted and triplet) | 1/4 |
| Phase | 0 – 360° | 0° |
| Trigger | Retrigger, Free, One-shot | Retrigger |
| Fade In | 0 – 10 000 ms | 0 ms |
| Polarity | Bipolar, Unipolar | Bipolar |
| Scope | Per Voice, Global | Per Voice |
| Wavetable Position | 0 – 100 % | 0 % |

## Step Seq 1, Step Seq 2

| Parameter | Range | Default |
|---|---|---|
| On | Off / On | Off |
| Step Length | 8/1 … 1/64 (incl. dotted and triplet) | 1/16 |
| Steps | 1 – 32 | 16 |
| Swing | 0 – 100 % | 0 % |
| Glide | 0 – 100 % | 0 % |
| Trigger | Retrigger, Free | Retrigger |

## Macros and modulation amounts

| Parameter | Range | Default |
|---|---|---|
| Macro 1 – Macro 8 | 0 – 100 % | 0 % |
| Mod 1 – Mod 64 Amount | −100 – +100 % | 0 % |

The **Mod *n* Amount** parameters are the depths of the 64 matrix slots, so you can automate how much a
routing does from your DAW.

:::note[Stable ids]
Parameter ids never change between versions; new parameters are only ever added at the end. Automation in
your projects keeps working when you update XONOVA.
:::
