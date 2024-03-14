import { assert } from 'jsr:@std/assert';
import { generate } from "./mod.ts";

Deno.test('generate Hex color', () =>{
    const color = generate();
    assert(color);
    console.log('DEBUG Hex color: ', color);
    
})