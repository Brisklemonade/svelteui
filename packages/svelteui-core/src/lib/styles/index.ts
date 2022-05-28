export * from './utils/index.js';
export * from './functions/index.js';

export { colors } from './default-colors.js';
export {
	css,
	dark,
	theme,
	config,
	globalCss,
	keyframes,
	getCssText,
	createTheme,
	NormalizeCSS,
	SvelteUIGlobalCSS
} from '../stitches.config.js';

export { default as SvelteUIProvider } from './SvelteUIProvider.svelte';

/** types exporting */
import type {
	SvelteUIProviderProps,
	DefaultProps,
	ColorScheme,
	DefaultBackground,
	DefaultColor,
	SvelteUIColor,
	SvelteUIGradient,
	SvelteUIMargins,
	SvelteUIMargin,
	SvelteUIShadow,
	SvelteUINumberSize,
	SvelteUISizes,
	SvelteUISize,
	HeadingStyle,
	Override,
	LoaderType,
	CSS,
	SvelteUIFontSizes,
	SvelteUINumberFontSize,
	SvelteUITextAlignment,
	SvelteUITextTransform,
	VariantThemeFunction,
	Transition
} from './types';
export type {
	SvelteUIProviderProps,
	DefaultProps,
	ColorScheme,
	DefaultBackground,
	DefaultColor,
	SvelteUIColor,
	SvelteUIGradient,
	SvelteUIMargins,
	SvelteUIMargin,
	SvelteUIShadow,
	SvelteUINumberSize,
	SvelteUISizes,
	SvelteUISize,
	HeadingStyle,
	Override,
	LoaderType,
	CSS,
	SvelteUIFontSizes,
	SvelteUINumberFontSize,
	SvelteUITextAlignment,
	SvelteUITextTransform,
	VariantThemeFunction,
	Transition
};
