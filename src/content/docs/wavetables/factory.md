---
title: Factory wavetables
description: All 40 factory wavetables in XONOVA, by category, with what each one does.
---

XONOVA ships **40 wavetables**, all generated mathematically inside the plugin – nothing is sampled, so
every table is clean and band-limited at any pitch. Most have **64 frames**; **Position** on the oscillator
moves through them.

Choose a table by clicking its name at the top left of an oscillator's display. The menu groups the tables
by category:

![The wavetable menu](../../../assets/screens/table-menu.png)

The **◂ ▸** arrows next to the name step through the tables in order – a quick way to audition them while
holding a note.

:::tip[Where to start]
- **Fat basses:** *Warm saw*, *Saw pair*, *Driven sine*, *Sine folder*
- **Reese and movement:** *Saw pair* with Position modulated, *Phase scatter*, *Spectral ripple*
- **Talking / vocal:** *Vowels*, *Resonant sweep*, *Formant* filter on top
- **Bells and metal:** *FM 3:1*, *Glass*, *Metal*, *Ring stack*
- **Lo-fi and digital:** *Bit steps*, *Stair steps*
:::

## Basic

| Id | Name | What it does |
|---|---|---|
| `basic` | Basic shapes | Sine, triangle, saw and square, morphing in that order |
| `pwm` | PWM sweep | Pulse wave narrowing from 50 % to 4 % duty |
| `additive` | Additive series | Saw built up one harmonic per frame |
| `ramp-skew` | Ramp skew | Triangle whose peak slides left until it is a saw |
| `saw-pair` | Saw pair | Two saws drifting apart until they sound an octave up |

## Analog

| Id | Name | What it does |
|---|---|---|
| `sync-saw` | Sync saw | Hard-synced saw, slave rising from 1x to 8x |
| `sync-square` | Sync square | Hard-synced square, slave rising from 1x to 8x |
| `warm-saw` | Warm saw | Saw behind a gentle low-pass that opens across the table |
| `warm-square` | Warm square | Square behind a low-pass that opens across the table |
| `drive-sine` | Driven sine | Sine pushed into tanh saturation, up to 16x gain |
| `fold-sine` | Sine folder | Sine through a smooth wavefolder, up to 8x drive |
| `fold-triangle` | Triangle folder | Triangle folded back on itself, up to 6x |
| `clip-sine` | Clipped sine | Sine hard-clipped harder and harder into a square |

## Harmonic

| Id | Name | What it does |
|---|---|---|
| `odd-series` | Odd series | Square built up one odd harmonic per frame |
| `octave-stack` | Octave stack | Octave partials 1, 2, 4, 8 ... stacked up |
| `drawbars` | Drawbars | Morph through four organ-style drawbar registrations |
| `glass` | Glass | Sine with sparse high partials fading in |
| `comb-sweep` | Comb sweep | Saw with comb notches sweeping through it |
| `harmonic-band` | Harmonic band | A widening band of harmonics rising up the spectrum |
| `harmonic-ladder` | Harmonic ladder | Pure harmonics 1 to 16, one after the other |
| `primes` | Prime harmonics | Only prime-numbered harmonics, added in order |
| `fibonacci` | Fibonacci harmonics | Harmonics 1, 2, 3, 5, 8, 13 ... added in order |
| `tilt-sweep` | Tilt sweep | All harmonics, the spectrum tilting from dark to bright |

## Vocal

| Id | Name | What it does |
|---|---|---|
| `vowels` | Vowels | Formant morph through A, E, I, O and U |
| `resonant-sweep` | Resonant sweep | One resonant peak climbing six octaves |

## Digital

| Id | Name | What it does |
|---|---|---|
| `bit-steps` | Bit steps | Sine quantised from 7 bits down to 1 |
| `stair-steps` | Stair steps | Sine held in steps, 64 per cycle down to 3 |
| `fm-2to1` | FM 2:1 | Two-operator FM at 2:1, index rising to 2 pi |
| `fm-3to1` | FM 3:1 | Two-operator FM at 3:1, index rising to 2 pi |
| `fm-feedback` | Feedback FM | Self-modulating sine turning into a saw |
| `windowed-resonance` | Windowed resonance | Rising cosine under a falling window: a swept resonance |
| `chirp` | Chirp | Sine whose frequency rises within each cycle |
| `ring-stack` | Ring stack | Sine ring-modulated by harmonics 1 to 16 |
| `square-ring` | Square ring | Square ring-modulated by stepped harmonics |

## Texture

| Id | Name | What it does |
|---|---|---|
| `random-morph` | Random morph | Eight random spectra, crossfaded |
| `phase-scatter` | Phase scatter | Saw spectrum with ever more scattered phases |
| `noise-band` | Noise band | Random partials over a band widening to 512 harmonics |
| `spectral-ripple` | Spectral ripple | Saw with a ripple travelling through its spectrum |
| `metal` | Metal | Sparse high partials drifting in level |
| `string-decay` | String decay | Plucked-string spectrum losing its highs over time |

## Table ids

Presets and saved sessions refer to a factory table by its id, for example `factory:warm-saw`. Ids never
change once released, so old projects always find their tables.
