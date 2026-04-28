# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

react-tv-space-navigation is a cross-platform spatial navigation library for TV apps (AndroidTV, tvOS, web-based TV). It wraps `@bam.tech/lrud` (a UI-agnostic spatial navigation engine) with React Native components. The published package is `react-tv-space-navigation`.

## Monorepo Structure

Yarn 3 workspaces with two packages:

- **`packages/lib`** — The library itself. Entry point: `src/index.ts`. Built with webpack into `dist/` as a UMD bundle. Core class is `SpatialNavigator` which wraps LRUD for node registration, focus management, and deferred focus queuing.
- **`packages/example`** (`hoppixtv`) — An Expo TV demo app. Uses `react-native-tvos` (not standard react-native). Requires `EXPO_TV=1` env var for native commands. Has platform-specific remote control managers (`RemoteControlManager.{ios,android,ts}`).

## Commands

```bash
yarn install                  # Install all dependencies (runs patch-package via postinstall)
yarn test                     # Full suite: lint → types → core tests → example tests
yarn test:core                # Jest tests for the lib package only
yarn test:lint                # ESLint across the entire monorepo
yarn test:types               # TypeScript type-checking in all workspaces
yarn build:core               # Build the lib package (webpack → dist/)

# Example app
yarn start:example            # Start Expo dev server (TV mode)
yarn build:example:web        # Export web build

# Run a single test file
yarn workspace react-tv-space-navigation jest -- path/to/file.test.tsx
```

## Architecture

The lib's public API is a set of React components and one configuration function:

- `SpatialNavigationRoot` — Mounts a `SpatialNavigator` instance (LRUD wrapper) and subscribes to remote control events. Each root is an independent navigation tree.
- `SpatialNavigationNode` — Registers a node in the LRUD tree. All other components (`View`, `FocusableView`, `ScrollView`, virtualized lists/grids) use this internally.
- `SpatialNavigationFocusableView` — Leaf node that can receive focus. Provides `isFocused` via render prop.
- `SpatialNavigationView` — Groups children with a direction (`horizontal`/`vertical`).
- `SpatialNavigationScrollView` — Scroll container, supports both native and custom scroll implementations.
- `SpatialNavigationVirtualizedList` / `VirtualizedGrid` — Windowed rendering with spatial navigation integration.
- `configureRemoteControl` — Must be called once at app startup to wire platform-specific key events into LRUD directions.

Context providers handle: current spatial navigator instance, parent node ID, scroll context, device type (remote vs pointer), default focus, root active state, and navigation locking.

## Key Conventions

- `no-console` ESLint rule is enforced (only `console.warn` and `console.error` allowed).
- `@typescript-eslint/no-explicit-any` is set to `error`.
- `react-hooks/exhaustive-deps` is set to `error`.
- Prettier is integrated through ESLint (`eslint-plugin-prettier`).
- Tests use `@testing-library/react-native` with snapshot tests. Test helpers are in `packages/lib/src/testing/` and `packages/lib/src/spatial-navigation/components/tests/helpers/`.
- The lib externalizes `react`, `react-dom`, `react-native`, and `react-native-web` in its webpack bundle.

## Publishing

1. Bump version in `packages/lib/package.json`
2. Commit, tag (`git tag vX.X.X && git push --tags`)
3. Generate changelog: `yarn changelog`
4. Publish: `cd packages/lib && yarn publish:package`
