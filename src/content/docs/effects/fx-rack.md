---
title: FX rack
description: XONOVA's 8-slot effects rack – chorus, flanger, phaser, delay, reverb, saturator and widener, in any order.
---

The **FX rack** processes the mixed output of all voices through up to **eight effects in series**. Any
effect type can go in any slot, and you can use the same type more than once.

![The FX page with Saturator, Delay, Reverb and Widener](../../../assets/screens/fx.png)

## Each slot

| Control | What it does |
|---|---|
| **Number** | The processing position, 1 (first) to 8 (last). Click it for **Move up**, **Move down**, **Move to first** and **Move to last**. |
| **Power** | Bypass the slot without losing its settings. |
| **Type** | The effect, or **None**. |
| **Mix** | Dry/wet balance. Default 30 %. |
| Three parameters | Change with the type. |

You can also reorder slots by dragging them on the [Routing page](/xonova-docs/pages/routing/).

## Effects

| Effect | Param 1 | Param 2 | Param 3 | Notes |
|---|---|---|---|---|
| **Chorus** | **Rate** | **Depth** | **Spread** – stereo width | Two modulated taps per channel. Classic thickening. |
| **Flanger** | **Rate** | **Depth** | **Feedback** – negative or positive | Short modulated delay; feedback sets how jet-like it gets. |
| **Phaser** | **Rate** | **Depth** | **Feedback** | Six swept allpass stages per channel. |
| **Delay** | **Time (synced)** – 1/32 up to 1/1, in note values | **Feedback** | **Tone** – dark ↔ thin, 50 % neutral | Tempo-synced **ping-pong** delay with filtered repeats. |
| **Reverb** | **Decay** – 0.3 to 12 s | **Damping** | **Size** | Eight-line feedback-delay-network reverb with gentle modulation. |
| **Saturator** | **Drive** – 0 to 36 dB | **Tone** – dark ↔ bright | **Character** – warm/asymmetric ↔ hard/symmetric | Level-compensated, so turning up Drive doesn't just make it louder. |
| **Widener** | **Width** – 0 % mono, 50 % unchanged, 100 % double | **Haas** – 0 to 15 ms | **Mono bass** – 20 to 400 Hz | Mid/side widening with a Haas delay and a high-pass on the sides that keeps the low end mono. |

:::tip[Sound-system safe]
For bass patches, end the chain with a **Widener**: set **Mono bass** around 120–200 Hz so the sub stays
centred on a mono club rig while the top end stays wide.
:::

## Order matters

Effects run from slot 1 to slot 8. A few rules of thumb:

- **Saturator first**, then modulation effects, then **Delay**, then **Reverb**.
- **Reverb before Delay** gives washed-out echoes of a reverb; **Delay before Reverb** puts the echoes in
  the room.
- **Widener last**, so nothing after it undoes the mono bass.

FX parameters are modulation targets too: an LFO on the Delay **Feedback** or a macro on Reverb **Mix**
makes for live dub moves.
