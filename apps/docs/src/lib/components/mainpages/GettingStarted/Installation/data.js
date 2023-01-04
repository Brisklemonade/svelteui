export const PACKAGE_DATA = [
	{
		id: 1,
		package: '@svelteuidev/composables',
		description: 'Actions and Utility functions for state and DOM management',
		dependencies: ['@svelteuidev/composables']
	},
	{
		id: 2,
		package: '@svelteuidev/core',
		description: 'Core components library: inputs, buttons, overlays, etc',
		dependencies: ['@svelteuidev/core', '@svelteuidev/composables']
	},
	{
		id: 3,
		package: '@svelteuidev/motion',
		description: 'Transition functions and Animation Components',
		dependencies: ['@svelteuidev/motion']
	},
	{
		id: 4,
		package: '@svelteuidev/prism',
		description: 'Code highlighting component with theme styles',
		dependencies: ['@svelteuidev/core', '@svelteuidev/composables', '@svelteuidev/prism']
	},
	{
		id: 5,
		package: '@svelteuidev/dates',
		description: 'Calendars, date and time pickers based on SvelteUI components',
		dependencies: ['dayjs', '@svelteuidev/core', '@svelteuidev/composables', '@svelteuidev/dates']
	},
	{
		id: 6,
		package: '@svelteuidev/preprocessors',
		description: 'Svelte preprocessor library to assist in many areas of development',
		dependencies: ['@svelteuidev/preprocessors']
	}
];
