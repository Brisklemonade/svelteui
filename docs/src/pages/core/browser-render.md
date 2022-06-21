---
title: BrowserRender
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/browser-render/
category: 'misc'
description: 'Disables rendering of child content in a SSR environment'
import: "import { BrowserRender } from '@svelteuidev/core';"
source: 'svelteui-core/src/lib/components/BrowserRender/BrowserRender.svelte'
docs: 'core/browser-render.md'
---

<script>
    import { Demo, BrowserRenderDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

BrowserRender allows for you to block the rendering of child content that doesn't function or makes sense in a server side rendering environment. For example rendering the canvas or another browser based api.

<Demo demo={BrowserRenderDemos.usage} />

Note that this component doesn't render any extra nodes to the DOM like the [Fragment](core/fragment) component.
