// classNames
function cls(...args) {
  const result = []

  args.forEach((arg) => {
    switch (typeof arg) {
      case 'number':
        result.push(String(arg))
        break;
      case 'string':
        result.push(arg)
        break;
      case 'object':
        if (arg !== null) {
          for (const [className, condition] of Object.entries(arg)) {
            if (condition) {
              result.push(className)
            }
          }
        }

        break;
      default:
        break;
    }

  })

  return result.join(' ')
}

export default cls;


// tests
// cls('foo', 'bar'); // => 'foo bar'
// cls('foo', { bar: true }); // => 'foo bar'
// cls({ 'foo-bar': true }); // => 'foo-bar'
// cls({ 'foo-bar': false }); // => ''
// cls({ foo: true }, { bar: true }); // => 'foo bar'
// cls({ foo: true, bar: true }); // => 'foo bar'
// cls('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'
// cls(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
