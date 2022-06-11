---
title: Overlay
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/overlay/
category: 'overlay'
description: 'Overlays given element with div element with any color and opacity'
import: "import { Overlay } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Overlay/Overlay.svelte'
docs: 'core/overlay.md'
---

<script>
    import { Demo, OverlayDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';

    let visible = false
    let count = 0
    
    // const overlay = `
    // <script>
    //     import { Overlay, Button, Box, Text } from '@svelteuidev/core'
    // <\/script>

    // <Box css={{ height: 100, position: 'relative' }}>
    //     {#if visible}
    //         <Overlay opacity={0.6} color="#000" zIndex={5} \/>
    //     {/if}
    //     <Button on:click={() => count++} color={visible ? 'red' : 'teal'}>
    //         {!visible ? 'Click as much as you like' : "Won't click, haha"}
    //     <\/Button>
    // <\/Box>
    // <Group children={2} direction='column' position="center">
    //     <Text>Count: {count}<\/Text>
    //     <Button on:click={() => visible = !visible}>Toggle overlay<\/Button>
    // <\/Group>
    // `
    // const overlayGradient = `
    // <script>
    //     import { Overlay, Button, Box } from '@svelteuidev/core'
    // <\/script>

    // <Box
    //   css={{
    //     position: 'relative',
    //     height: 200,
    //     width: '100%',
    //     maxWidth: 400,
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   }}
    // >
    //     <Button>Under overlay<\/Button>
    //     <Overlay gradient={\`linear-gradient(105deg, black 20%, #312f2f 50%, $gray400 100%)\`} \/>
    // <\/Box>
    // `
    // const overlayBlur = `
    // <script>
    //     import { Overlay, Box, Group, Button } from '@svelteuidev/core'
    // <\/script>

    // <Box css={{ height: 100, position: 'relative' }}>
    //     {#if visible}
    //         <Overlay opacity={0.6} color="#000" zIndex={5} blur={2} \/>
    //     {/if}
    //     Overlay with a blur
    // <\/Box>

    // <Group children={1} position="center">
    //     <Button on:click={() => visible = !visible}>Toggle overlay<\/Button>
    // <\/Group>
    // `
</script>

<Heading />

## Usage

Overlay had absolute position and will take 100% of width and height of parent container.
It is used to build components like [Modal](/core/modal/) and [LoadingOverlay](/core/loading-overlay/).

You can change overlay opacity (from 0 to 1), color (CSS color value, not connected to SvelteUI theme) and z-index (number).

<Demo demo={OverlayDemos.usage} />

## Display Content

Overlay has a default slot that allows you to display any content over the overlay. A `center` prop can be used to center the content horizontally.

<Demo demo={OverlayDemos.content} />

## With gradient

<Demo demo={OverlayDemos.gradient} />

## With blur

To blur the overlay backdrop, set the `blur` prop with a number. This will set the backdrop blur in px.
Note that blur [is not supported in Firefox](https://caniuse.com/css-backdrop-filter).

<Demo demo={OverlayDemos.blur} />

## Custom component

You can pass custom tag or component that will be used as root element:

```svelte
<script>
    import { Overlay, Anchor } from '@svelteuidev/core';
</script>

<Overlay root='a'> href="#" />
<Overlay root={Anchor} to="/hello" />
```
