import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { LiteralUnion } from '$lib/internal';
import {
	DefaultProps,
	SvelteUINumberSize,
	SvelteUIShadow,
	Transition,
	SvelteUISize
} from '$lib/styles';

export interface ModalProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	opened: boolean;
	title?: any;
	zIndex?: number;
	overflow?: 'outside' | 'inside';
	withCloseButton?: boolean;
	overlayOpacity?: number;
	overlayColor?: string;
	overlayBlur?: number;
	radius?: SvelteUINumberSize;
	size?: LiteralUnion<SvelteUISize, number | string>;
	transition?: Transition;
	transitionDuration?: number;
	transitionTimingFunction?: string;
	closeButtonLabel?: string;
	id?: string;
	shadow?: SvelteUIShadow;
	padding?: SvelteUINumberSize;
	closeOnClickOutside?: boolean;
	closeOnEscape?: boolean;
	trapFocus?: boolean;
	centered?: boolean;
	target?: HTMLElement | string;
	withinPortal?: boolean;
}

export interface ModalEvents {
	close: CustomEvent;
	mouseover: MouseEvent;
	mouseenter: MouseEvent;
	mouseleave: MouseEvent;
}

export interface ModalSlots {
	default: Record<string, never>;
}

export default class Modal extends SvelteComponentTyped<ModalProps, ModalEvents, ModalSlots> {}
