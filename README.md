# Generate random Hex color codes

## use `hex-color-generator` to generate random Hex color codes i.e `#42AAB2`
The generate function generates random Hex color each time you call it. Invoking `generate()` will generate randomly Hex color code i.e. #42AAB2

`hex-color-generator` is very tiny package, no need to worry about its size! try today!

This package is published on JSR, the new open-source package registry for modern JavaScript and Typescript. To learn more about JSR visit [jsr.io](https://jsr.io/)

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
<h1 style={{color: color}}>Home</h1>
<h1 style={{color: generate()}}>Home</h1>
//after generate: <h1 style={{color: #0969DA}}>Home</h1>

