# XONOVA documentation

The user manual for **XONOVA**, the wavetable synthesizer by MBSS (Monkey Business Soundsystem).

Live at **https://antik79.github.io/xonova-docs/**

Built with [Astro Starlight](https://starlight.astro.build/) and deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

## Working on the docs

```sh
npm install
npm run dev        # http://localhost:4321/xonova-docs/
npm run build      # static site in dist/
```

- Pages: `src/content/docs/**.md(x)`. The sidebar order is in `astro.config.mjs`.
- Screenshots: `src/assets/screens/`. Reference them with a relative path,
  e.g. `![Osc 1](../../../assets/screens/osc1.png)`; Astro optimises them at build time.
- Theme (colours, fonts, header stripe): `src/styles/xonova.css`, using the plugin's own palette and
  IBM Plex Sans Condensed.

## Retaking screenshots

The screenshots come from the standalone app at 100 % size (1288 × 974 window). On Linux you can take them
headless: run the standalone under `Xvfb`, give ALSA a virtual output so notes actually play (an
`~/.asoundrc` with a named `type null` PCM that has a `hint`), and drive it with `xdotool`.

## Custom domain

To serve the docs from your own domain (e.g. `docs.xonova…`): set `site` to the domain and remove `base` in
`astro.config.mjs`, replace `/xonova-docs/` in links and `src/styles/xonova.css`, add `public/CNAME`, and
set the domain under the repo's **Settings → Pages**.
