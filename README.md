# @utima/eslint-config
Utima's extensible shared eslint-config.

## Install
```
npm i -D eslint @utima/eslint-config
```

## Usage
Create `eslint.config.js` in the root of your directory with following contents:

```js
import baseConfig from '@utima/eslint-config';

export default [...baseConfig];
```

### Running eslint
Below is simple code snippet you can add to your package.json to run eslint:

```json
{
  "scripts": {
    "lint": "eslint './**/*.{js,ts,jsx,tsx,cjs,mjs}'"
  }
}
```

## FAQ

**Q: Does this work with VSCode eslint plugin?**

**A:** Yes, just make sure to enable `eslint.experimental.useFlatConfig: true` settings.
