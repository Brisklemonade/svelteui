---
title: Code
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/code/
category: 'typography'
description: 'Inline or block code without syntax highlight'
import: "import { Code } from '@svelteuidev/core';"
source: 'svelteui-core/src/lib/components/Code/Code.svelte'
docs: 'core/code.md'
---

<script lang="ts">
    import { Demo, CodeDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

By default the Code component renders **inline** `code` html element:

<Demo demo={CodeDemos.usage} />

## Block code

To render code in `pre` element pass block prop to Code component. It is also possible to allow copying the code to the clipboard with the prop `copy`:

<Demo demo={CodeDemos.block} />

## Custom color

By default, code has gray color, you can change it to any color from [theme colors](theming/default-theme.md):

<Demo demo={CodeDemos.color} />

## Syntax highlight

For syntax highlight consult the [prism package](others/prism).

<Demo demo={CodeDemos.prism} />
