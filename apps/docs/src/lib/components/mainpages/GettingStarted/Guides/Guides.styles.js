import { createStyles } from '@svelteuidev/core';

export default createStyles((theme) => {
	return {
		root: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			maxHeight: '198px',
			border: `1px solid ${theme.fn.themeColor('gray', 4)} !important`,
			borderRadius: `${theme.radii.sm.value} !important`,
			padding: `${theme.space.lgPX.value} !important`,
			backgroundColor: 'white !important',
			transition: 'box-shadow 200ms ease, transform 100ms ease',
			'&:hover': {
				transform: 'scale(1.01)',
				boxShadow: '$md'
			}
		},
		title: {
			textAlign: 'uppercase'
		},
		variants: {
			state: {
				active: {
					['.dark &']: {
						borderColor: `$blue600`
					},
					borderColor: `$blue600 !important`
				}
			}
		}
	};
});
