---
"@utima/eslint-config": minor
---

Jest is now optional, you can manually import it from the `configs` folder if you need it.

```js
import baseConfig from '@utima/eslint-config';
import { jest } from '@utima/eslint-config/configs';

export default [...baseConfig, ...jest];
```
