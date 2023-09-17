# @utima/eslint-config
Utima's extensible shared eslint-config.

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
