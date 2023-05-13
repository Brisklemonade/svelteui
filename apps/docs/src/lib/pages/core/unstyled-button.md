---
title: UnstyledButton
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/unstyled-button/
category: 'inputs'
description: 'Render button with no theme colors'
importCode: "import { UnstyledButton } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/UnstyledButton/UnstyledButton.svelte'
docs: 'core/unstyled-button.md'
---

<script lang="ts">
    import { Demo, UnstyledButtonDemos } from '@svelteuidev/demos'
</script>

## Usage

The UnstyledButton component is a button that does not contain any styles from the theme and defaults to a button HTML element, which can be controlled with the prop `root`. It can be used to create custom buttons. For example, this component is used by the [Burger](core/burger) component.

<Demo demo={UnstyledButtonDemos.usage} />
