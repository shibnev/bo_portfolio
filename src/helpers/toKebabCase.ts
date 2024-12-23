/**
 * Converts a given string to kebab-case.
 * 
 * @param {string} text - The input string to be converted.
 * @returns {string} The converted kebab-case string.
 */
export default function toKebabCase(text: string){
  return text.toLowerCase().replace(' ', '-')
}
