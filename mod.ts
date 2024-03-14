/**
 * This function generate randomly Hex color when is called
 * 
 * ```ts
 * import { generate } from "hex-color-generator";
 * let color = generate();
 * <div class={` text-[${color}]`} > User Profile </div>
 * ```
 * 
 * @returns a Hex color code string i.e #0969DA
 */
export function generate():string {
    return (
        "#" + Math.floor(Math.random() * 16777215).toString(16)
    ).toUpperCase();
}
