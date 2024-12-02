/**
 * Utility function to construct a class name string conditionally.
 * Supports strings, numbers, and objects where keys are class names and values are conditions.
 *
 * @param {...(string | number | Record<string, boolean>)} args - Arguments to generate class names from.
 * @returns {string} A string of class names separated by spaces.
 * 
 * @examples
 * cls('foo', 'bar'); // => 'foo bar'
 * cls('foo', { bar: true }); // => 'foo bar'
 * cls({ 'foo-bar': true }); // => 'foo-bar'
 * cls({ 'foo-bar': false }); // => ''
 * cls({ foo: true }, { bar: true }); // => 'foo bar'
 * cls({ foo: true, bar: true }); // => 'foo bar'
 * cls('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'
 * cls(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
 */
export default function cls(...args: (string | number | Record<string, boolean>)[]): string {
  return args
    .flatMap((arg) => {
      if (typeof arg === 'string' || typeof arg === 'number') {
        return String(arg).trim();
      }
      if (typeof arg === 'object' && arg !== null) {
        return Object.entries(arg)
          .filter(([, condition]) => condition)
          .map(([className]) => className.trim());
      }
      return [];
    })
    .join(' ');
}
