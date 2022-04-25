---
id: contributing
title: Contributing
---

import { Alert } from '@mantine/core';
import { CheckCircledIcon } from '@radix-ui/react-icons'

<Alert icon={<CheckCircledIcon />} title="Thank You!">
If you are even viewing this page, I would like to thank you. If you have the ability to contribute to this project in any capacity that would be greatly appreciated
</Alert>

## Ways to contribute

- **Improve documentation:** fix incomplete or missing docs, bad wording, examples or explanations
- **Give feedback:** we are constantly working on making SvelteUI better, please share how you use SvelteUI, what features are missing and what is done good via GitHub Discussions
- **Share SvelteUI:** share link to SvelteUI docs with everyone who can be interested, share SvelteUI on Twitter
- **Contribute to codebase:** propose new feature via GitHub Issues or find an [existing one](https://github.com/Brisklemonade/svelteui/labels/help%20wanted) that you are interested in and work on it
- **Give us a code review:** help us identify problems with [source code](https://github.com/Brisklemonade/svelteui) or make SvelteUI more performant

## Contributing workflow

- Decide what you want to contribute
- If you want to implement new feature discuss it with a maintainer ([Discord](https://discord.gg/2J2xmzCS79)) before jumping into code
- After finalizing issue details work on code, please follow commit convention
- Submit a PR if everything is fine
- Get a code review and fix all issues noticed by a maintainer
- PR is merged, and we're done!

## Commit convention

SvelteUI is a monorepo and it is important to write clear commit messages to keep git history clean.
All commits made in this repository are divided in 3 groups:

- **package commits** related to particular package
- **docs commits** related to documentation
- **core commits** only related to repository tooling and not associated with any package

Commit message consists of 3 parts:

```bash
[area] Optional title: Message
```

Examples:

- `[core] Fix documentation deployment script` - Change made in repository script, it is not related to documentation or any package
- `[docs] Update report issues link` - Change related to documentation website
- `[@svelteui/core] Button: Add theme focus styles` - Change in `@svelteui/core` package at Button component
- `[@svelteui/actions] use-list-state: Add remove handler` - Change in `@svelteui/actions` package at use-list-state hook

## Git branches

- **main** - When the project hits 1.0, this will be for the current version, and patches for current minor version (1.0.x)
- **next-minor** - contains next minor version (1.x.0), most likely you would want to create a PR to this branch

## Get started with SvelteUI locally

- Install [editorconfig](https://editorconfig.org/) extension for your editor
- Fork [repository](https://github.com/Brisklemonade/svelteui), clone or download your fork
- Install dependencies with npm - `npm i`
- To start docs - `cd docs && yarn install && yarn dev`

## NPM scripts

All packages npm scripts are located at [main package.json](https://github.com/Brisklemonade/svelteui/blob/main/package.json),
individual packages have scripts, but they should not be interacted with directly. This is due to the nature of [TurboRepo](https://turborepo.org/). All scripts should be ran from the root of the monorepo.

## Testing scripts

- `format` - runs prettier on packages folder
- `lint` - runs eslint on packages folder (run format before running lint)
- `test` - runs tests with [vitest](https://vitest.dev/)
- `repo:prepush` - runs all of these commands
