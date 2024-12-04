/**
 * Utility function to construct a class name string conditionally.
 * Supports strings, numbers, and objects where keys are class names and values are conditions.
 *
 * @param {...(string | number | Record<string, boolean>)} args - Arguments to generate class names from.
 * @returns {string} A string of class names separated by spaces.
 * 
 * @examples
 * classNames('foo', 'bar'); // => 'foo bar'
 * classNames('foo', { bar: true }); // => 'foo bar'
 * classNames({ 'foo-bar': true }); // => 'foo-bar'
 * classNames({ 'foo-bar': false }); // => ''
 * classNames({ foo: true }, { bar: true }); // => 'foo bar'
 * classNames({ foo: true, bar: true }); // => 'foo bar'
 * classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'
 * classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
 */
export default function classNames(...args: (string | number | Record<string, boolean>)[]): string {
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
