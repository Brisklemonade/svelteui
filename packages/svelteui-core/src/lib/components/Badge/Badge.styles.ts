import { dark, rgba, createStyles } from '$lib/styles';
import type {
	DefaultProps,
	SvelteUIColor,
	SvelteUIGradient,
	SvelteUINumberSize,
	SvelteUISize,
	VariantThemeFunction
} from '$lib/styles';

export interface BadgeProps extends DefaultProps<HTMLDivElement | HTMLElement> {
	color?: SvelteUIColor;
	variant?: BadgeVariant;
	gradient?: SvelteUIGradient;
	size?: SvelteUISize;
	radius?: SvelteUINumberSize;
	fullWidth?: boolean;
}

export type BadgeVariant = 'light' | 'filled' | 'outline' | 'dot' | 'gradient';

export const sizes = {
	xs: {
		fontSize: 9,
		height: 16
	},
	sm: {
		fontSize: 10,
		height: 18
	},
	md: {
		fontSize: 11,
		height: 20
	},
	lg: {
		fontSize: 13,
		height: 26
	},
	xl: {
		fontSize: 16,
		height: 32
	}
} as const;

export const dotSizes = {
	xs: 4,
	sm: 4,
	md: 6,
	lg: 8,
	xl: 10
};

export function getVariantStyles(
	color: SvelteUIColor,
	variant: BadgeVariant,
	size: number | string,
	gradient: SvelteUIGradient
) {
	const dotSize = typeof size === 'number' ? `${size}px` : dotSizes[size] || dotSizes.md;
	const ctx: SvelteUIGradient = { from: 'indigo', to: 'cyan', deg: 45 };
	if (variant === 'dot') {
		return {
			dot: {
				[`${dark.selector} &`]: {
					color: `$${color}800`,
					border: '1px solid $dark300',
					'&::before': {
						backgroundColor: `$${color}400`
					}
				},
				backgroundColor: 'transparent',
				color: '$gray700',
				border: '1px solid $gray300',
				paddingLeft: typeof size === 'number' ? `${size}px` : `$${size}`,

				'&::before': {
					content: '""',
					display: 'block',
					width: dotSize,
					height: dotSize,
					borderRadius: dotSize,
					backgroundColor: `$${color}600`,
					marginRight: dotSize
				}
			}
		};
	}

	if (variant === 'gradient') return getVariant(color, gradient);
	return getVariant(color, ctx);
}

/**
 * getVariant function is a copy & paste of the vFunc function
 *
 * It is copied over because hover styles were removed
 *
 * Better implementation should be developed soon
 */
export const getVariant = (
	color: SvelteUIColor,
	gradient: SvelteUIGradient = { from: 'blue', to: 'cyan', deg: 45 }
): VariantThemeFunction => {
	const dtm = {
		lightBg: dark.colors[`${color}800`].value,
		lightHv: dark.colors[`${color}700`].value,
		outlineHv: dark.colors[`${color}400`].value,
		subtleHv: dark.colors[`${color}800`].value
	};

	return {
		/** Filled variant */
		filled: {
			[`${dark.selector} &`]: {
				backgroundColor: `$${color}800`
			},
			border: 'transparent',
			backgroundColor: `$${color}600`,
			color: 'White'
		},
		/** Light variant */
		light: {
			[`${dark.selector} &`]: {
				backgroundColor: rgba(dtm.lightBg, 0.35),
				color: color === 'dark' ? '$dark50' : `$${color}200`
			},
			border: 'transparent',
			backgroundColor: `$${color}50`,
			color: color === 'dark' ? '$dark900' : `$${color}600`
		},
		/** Outline variant */
		outline: {
			[`${dark.selector} &`]: {
				border: `1px solid $${color}400`,
				color: `$${color}400`
			},
			border: `1px solid $${color}700`,
			backgroundColor: 'transparent',
			color: `$${color}700`
		},
		/** Subtle variant */
		subtle: {
			[`${dark.selector} &`]: {
				color: color === 'dark' ? '$dark50' : `$${color}200`
			},
			border: 'transparent',
			backgroundColor: 'transparent',
			color: color === 'dark' ? '$dark900' : `$${color}600`
		},
		/** Default variant */
		default: {
			[`${dark.selector} &`]: {
				border: '1px solid $dark500',
				backgroundColor: '$dark500',
				color: 'White'
			},
			border: '1px solid $gray400',
			backgroundColor: 'White',
			color: 'Black'
		},
		/** White variant */
		white: {
			border: 'transparent',
			backgroundColor: 'White',
			color: `$${color}700`
		},
		/** Gradient variant */
		gradient: {
			border: 'transparent',
			background: `linear-gradient(${gradient.deg}deg, $${gradient.from}600 0%, $${gradient.to}600 100%)`,
			color: 'White'
		}
	};
};

interface BadgeStyleParams {
	color?: SvelteUIColor;
	variant?: BadgeVariant;
	gradient?: SvelteUIGradient;
	size?: SvelteUISize;
	radius?: SvelteUINumberSize;
	fullWidth?: boolean;
}

export default createStyles(
	(theme, { color, fullWidth, gradient, radius, size, variant }: BadgeStyleParams) => {
		const { fontSize, height } = size in sizes ? sizes[size] : sizes.md;
		return {
			root: {
				focusRing: 'auto',
				fontSize,
				height,
				WebkitTapHighlightColor: 'transparent',
				lineHeight: `${height - 2}px`,
				textDecoration: 'none',
				padding:
					typeof size === 'number'
						? `0 $${size}px`
						: `0 ${theme.fn.size({ size, sizes: theme.space })}px`,
				boxSizing: 'border-box',
				display: fullWidth ? 'flex' : 'inline-flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: fullWidth ? '100%' : 'auto',
				textTransform: 'uppercase',
				borderRadius: `$${radius}`,
				fontWeight: 700,
				letterSpacing: 0.25,
				cursor: 'default',
				textOverflow: 'ellipsis',
				overflow: 'hidden'
			},
			leftSection: {
				marginRight: '$3'
			},
			rightSection: {
				marginLeft: '$3'
			},
			inner: {
				whiteSpace: 'nowrap',
				overflow: 'hidden',
				textOverflow: 'ellipsis'
			},
			variants: {
				variation: getVariantStyles(color, variant, size, gradient)
			}
		};
	}
);
