# Array.prototype.map

<img src = "https://img.shields.io/static/v1?label=Difficulty&message=Easy&color=brightgreen" />

Array.prototype.map creates a new array populated with the results of calling a provided function on every element in the calling array.

Implement Array.prototype.map. To avoid overwriting the actual Array.prototype.map which is being used by the autograder, we shall instead implement it as Array.prototype.myMap.

## Examples

```js
[1, 2, 3, 4].myMap((i) => i); // [1, 2, 3, 4]
[1, 2, 3, 4].myMap((i) => i * i); // [1, 4, 9, 16]
```

## Solutions

```js
/**
 * @callback callbackFn
 * @param {object} [thisArg]
 * @return {Array}
 */
Array.prototype.myMap = function (callbackFn, thisArg) {
  const len = this.length;
  const array = new Array(len);

  for (let k = 0; k < len; k++) {
    // Ignore index if value is not defined for index (e.g. in sparse arrays).
    if (Object.hasOwn(this, k)) {
      array[k] = callbackFn.call(thisArg, this[k], k, this);
    }
  }

  return array;
};
```
