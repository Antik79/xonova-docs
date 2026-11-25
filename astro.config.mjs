// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Published on GitHub Pages at https://antik79.github.io/xonova-docs/
// For a custom domain later: set `site` to it, drop `base`, and add public/CNAME.
export default defineConfig({
	site: 'https://antik79.github.io',
	base: '/xonova-docs',
	integrations: [
		starlight({
			title: 'XONOVA',
			description:
				'User manual for XONOVA, the wavetable synthesizer by Monkey Business Soundsystem.',
			components: { SiteTitle: './src/components/SiteTitle.astro' },
			favicon: '/favicon.svg',
			customCss: ['./src/styles/xonova.css'],
			social: [
				{
					icon: 'github',
					label: 'Downloads & releases',
					href: 'https://github.com/Antik79/xonova-releases/releases',
				},
			],
			editLink: { baseUrl: 'https://github.com/Antik79/xonova-docs/edit/main/' },
			lastUpdated: true,
			sidebar: [
				{
					label: 'Getting started',
					items: [
						'getting-started/introduction',
						'getting-started/installation',
						'getting-started/first-sound',
					],
				},
				{
					label: 'The interface',
					items: [
						'interface/overview',
						'interface/controls',
						'interface/live-feedback',
						'interface/settings',
						'interface/themes',
					],
				},
				{
					label: 'Pages',
					items: [
						'pages/synth',
						'pages/routing',
						'pages/fx',
						'pages/matrix',
						'pages/global',
					],
				},
				{
					label: 'Sound sources',
					items: [
						'sound/oscillators',
						'sound/warp-modes',
						'sound/mod-oscillator',
						'sound/noise',
						'sound/unison-and-voices',
					],
				},
				{
					label: 'Filters & signal flow',
					items: ['filters/filters', 'filters/routing'],
				},
				{
					label: 'Effects',
					items: ['effects/inserts', 'effects/fx-rack', 'effects/output'],
				},
				{
					label: 'Modulation',
					items: [
						'modulation/overview',
						'modulation/envelopes',
						'modulation/lfos',
						'modulation/step-sequencers',
						'modulation/macros',
						'modulation/performance-sources',
						'modulation/matrix',
					],
				},
				{
					label: 'Wavetables',
					items: ['wavetables/factory', 'wavetables/import'],
				},
				{
					label: 'Presets',
					items: ['presets/browser', 'presets/saving'],
				},
				{
					label: 'MIDI',
					items: ['midi/midi-learn', 'midi/playing'],
				},
				{
					label: 'Reference',
					items: [
						'reference/shortcuts',
						'reference/parameters',
						'reference/files',
						'reference/updates-and-privacy',
					],
				},
				{
					label: 'Help',
					items: ['help/faq', 'help/troubleshooting', 'help/reporting-problems'],
				},
			],
		}),
	],
});
