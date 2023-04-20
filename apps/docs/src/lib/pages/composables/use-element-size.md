---
title: 'use-element-size'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-element-size/
description: 'Get element width and height and subscribe to changes'
importCode: "import { useElementSize } from '@svelteuidev/composables';"
docs: 'composables/use-element-size.md'
source: 'svelteui-composables/src/utilities/use-element-size/use-element-size.ts'
---

<script lang='ts'>
    import { Demo, ComposableDemos } from '@svelteuidev/demos';
</script>

## Usage

<Demo demo={ComposableDemos.useElementSizeDemo.usage} />

## Definition

```js
export function useElementSize(): ElementSize;
```