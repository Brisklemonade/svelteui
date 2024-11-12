import { HTMLAttributes } from 'svelte/elements';
import { Component } from '$lib/internal';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import { CloseButtonProps } from '../ActionIcon/CloseButton/CloseButton';

export interface NotificationProps
	extends DefaultProps<HTMLInputElement>,
		HTMLAttributes<HTMLElement> {
	title?: string;
	color?: SvelteUIColor;
	radius?: SvelteUINumberSize;
	loading?: boolean;
	icon?: Component | HTMLOrSVGElement;
	iconSize?: number;
	iconProps?: Record<string, unknown>;
	withCloseButton?: boolean;
	closeButtonLabel?: string;
	closeButtonProps?: CloseButtonProps;
}

export interface NotificationEvents {
	close: CustomEvent;
	[evt: string]: CustomEvent<any>;
}
