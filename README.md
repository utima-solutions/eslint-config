# @bajosoft/eslint-config

## Installation
```
npm i -D eslint @bajosoft/eslint-config
```

## Usage
Create `eslint.config.js` in the root of your directory with following contents:

```js
import bajosoftConfig from '@bajosoft/eslint-config';

export default [...bajosoftConfig];
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
