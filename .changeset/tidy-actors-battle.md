---
"@utima/eslint-config": minor
---

Added support for `eslint-plugin-tailwindcss` as an optional config. Import `import { tailwind } from '@utima/eslint-config/configs';` to use it.
Added ability to import configs separately using `exports` package.json field, so you can use only configs you need. Check README.md for more info.
Updated `react/jsx-handler-names` rule to be less strict.
