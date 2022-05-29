import { createStyles } from '$lib/styles';
import type { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

export interface BurgerProps extends DefaultProps<HTMLButtonElement | HTMLAnchorElement> {
	opened?: boolean;
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
}

export interface BurgerStyleParams {
	opened?: boolean;
	color: SvelteUIColor | string;
	size: SvelteUINumberSize;
}

export const sizes = {
	xs: 12,
	sm: 18,
	md: 24,
	lg: 34,
	xl: 42
};

export default createStyles((theme, { color, size, opened }: BurgerStyleParams, dark, ctx) => {
	const { size: sizeFn, themeColor } = ctx.fns;
	const sizeValue = sizeFn({ size, sizes });

	return {
		root: {
			borderRadius: theme.radii.sm.value,
			width: sizeValue + 10,
			height: sizeValue + 10,
			padding: +theme.space.xs.value / 2,
			cursor: 'pointer'
		},

		burger: {
			position: 'relative',
			userSelect: 'none',
			boxSizing: 'border-box',

			'&, &:before, &:after': {
				[`${dark.selector} &`]: {
					backgroundColor: 'white'
				},
				display: 'block',
				width: sizeValue,
				height: Math.ceil(sizeValue / 12),
				backgroundColor: themeColor(color, 6),
				outline: '1px solid transparent',
				transitionProperty: 'background-color, transform',
				transitionDuration: '300ms',

				'@media (prefers-reduced-motion)': {
					transitionDuration: '0ms'
				}
			},

			'&:before, &:after': {
				position: 'absolute',
				content: '""',
				left: 0
			},

			'&:before': {
				top: (sizeValue / 3) * -1
			},

			'&:after': {
				top: sizeValue / 3
			},

			'&.opened': opened
				? {
						backgroundColor: 'transparent',

						'&:before': {
							transform: `translateY(${sizeValue / 3}px) rotate(45deg)`
						},

						'&:after': {
							transform: `translateY(-${sizeValue / 3}px) rotate(-45deg)`
						}
				  }
				: {}
		}
	};
});
