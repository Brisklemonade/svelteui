import { SVGAttributes } from 'svelte/elements';
import { Component } from '$lib/internal/types';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize, LoaderType } from '$lib/styles';

export interface LoaderProps
	extends DefaultProps<Omit<Component, 'prototype'>>,
		Omit<SVGAttributes<HTMLElement>, 'className'> {
	size?: SvelteUINumberSize;
	color?: SvelteUIColor | 'white';
	variant?: LoaderType;
}
