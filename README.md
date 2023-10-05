# @utima/eslint-config
Utima's extensible shared eslint-config. Comes pre-configured with **Prettier**, opinionated rules for JavaScript, TypeScript projects including React, TailwindCSS, Next.JS, jest **eslint plugins** and more.

The config uses new [flat config](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats) format, which is supported by eslint 7.0.0 and above. This allows us to use `.mjs` extension and import other configs from npm packages.

Base config includes configurations for multiple frameworks (JS, TS, React, jest, import formatting) with some additional configs, you can use to extend the default one (see section below).

## Install
```
npm i -D eslint @utima/eslint-config
```

## Usage
Create `eslint.config.mjs` in the root of your directory with following contents:

```js
import baseConfig from '@utima/eslint-config';

export default [...baseConfig];
```

### Running eslint
Below is simple code snippet you can add to your package.json to run eslint:

```json
{
  "scripts": {
    "lint": "ESLINT_USE_FLAT_CONFIG=true eslint -c eslint.config.mjs './**/*.{js,ts,jsx,tsx,cjs,mjs}'",
  }
}
```

## Configs

Each config is a separate file, which can be imported and used in your config. For example, to use TailwindCSS config, you can do:

```js
import baseConfig from '@utima/eslint-config';
import { tailwind } from '@utima/eslint-config/configs';

export default [...baseConfig, ...tailwind];
```

Check following table for all aviailable configs:

| Config name   | Description                                                                                           | Included in default config |
|---------------|-------------------------------------------------------------------------------------------------------|----------------------------|
| base          | Base config, includes language settings, globals and eslint.recommended config with some custom rules | ✅                          |
| imprt         | `eslint-plugin-import`                                                                                | ✅                          |
| unusedImports | `eslint-plugin-unused-imports`                                                                        | ✅                          |
| jest          | `eslint-plugin-jest`, `eslint-plugin-jest-formatting`                                                 | ✅                          |
| prettier      | `plugin:prettier/recommended`                                                                         | ✅                          |
| react         | `eslint-plugin-react`, `eslint-plugin-react-hooks`                                                    | ✅                          |
| typescript    | `@typescript-eslint/eslint-plugin`                                                                    | ✅                          |
| tailwind      | `eslint-plugin-tailwindcss`                                                                           | ❌                          |
| next          | `@next/eslint-plugin-next`                                                                            | ❌                          |

## FAQ

**Q: Does this work with VSCode eslint plugin?**

**A:** Yes, due to flat config and (.mjs) extension, you have to enable some settings:

```json
{
  "eslint.experimental.useFlatConfig": true,
  "eslint.options": {
    "overrideConfigFile": "eslint.config.mjs"
  },
}
```

## Contribution guide

Every PR implementing new feature should include [changeset](https://github.com/changesets/changesets). Use `npm run changeset` from the root of the repository to generate new changeset and include it with your PR.

### Release

Make sure all new features are merged to `main` and you are on `main` branch including their changesets. and run:

```bash
npm run release
```

#### RC Versions

To enter RC mode, run:

```bash
npm run release:rc:exit
```

when in RC mode, all version releases will have `-rc` suffix. To exit RC mode, run:

```bash
npm run release:rc:exit
```
