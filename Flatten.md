# Flatten an Array

<img src = "https://img.shields.io/static/v1?label=Difficulty&message=Medium&color=orange" />

Implement a function flatten, that flattens arrays with arbitrary levels of nesting, and recursively concatenates all arrays within it into an array containing only a single level.

## Examples

```js
// Single-level arrays are unaffected
flatten([1, 2, 3]); // [1, 2, 3]

// Inner arrays are flattened into a single level
flatten([1, [2, 3]]); // [1, 2, 3]
flatten([
  [1, 2],
  [3, 4],
]); // [1, 2, 3, 4]

// Flattens recursively
flatten([1, [2, [3, [4, [5]]]]]); // [1, 2, 3, 4, 5]
```

## Solutions

### Solution 1: Iterative Solution

```js
/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
eexport default function flatten(array) {
  const res = [];
  const copy = array.slice();

  while (copy.length) {
    const item = copy.shift();
    if (Array.isArray(item)) {
      copy.unshift(...item);
    } else {
      res.push(item);
    }
  }

  return res;
}

```

### Solution 2: Iterative Solution with `Array.prototype.some`

```js
export default function flatten(array) {
  while (array.some(Array.isArray)) {
    array = [].concat(...array);
  }
  return array;
}
```

### Solution 3: Recursive approach with Array.prototype.reduce

```js
/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(array) {
  return array.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
    []
  );
}
```

### Solution 4: Flatten the array in-place

```js
export default function flatten(array) {
  for (let i = 0; i < array.length; ) {
    if (Array.isArray(array[i])) {
      array.splice(i, 1, ...array[i]);
    } else {
      i++;
    }
  }
  return array;
}
```
