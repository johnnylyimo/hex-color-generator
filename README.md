# Generate random Hex color codes

## use `hex-color-generator` to generate random Hex color codes i.e `#42AAB2`
The generate function generates random Hex color each time you call it. Invoking `generate()` will generate randomly Hex color. The 

`hex-color-generator` is very tiny package, no need to worry about! try today! :+1

This package is published on JSR, the new open-source package registry for modern JavaScript and Typescript. To learn more about JSR visit [jsr.io](https://jsr.io/).

## License
MIT

Installation:

    on Node: npx jsr add @johnnylyimo/hex-color-generator
    on Deno: deno add @johnnylyimo/hex-color-generator
    on Yarn: yarn dlx jsr add @johnnylyimo/hex-color-generator
    on Pnpm: pnpm dlx jsr add @johnnylyimo/hex-color-generator
    on Bun: bunx jsr add @johnnylyimo/hex-color-generator



Examples:

```js
import { generate } from "hex-color-generator";

let color = generate();
<div class={` text-[${color}]`} > User Profile </div>
//after generate: <div class={` text-[#0969DA]`} > User Profile </div>

