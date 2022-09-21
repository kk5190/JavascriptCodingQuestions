# Counter

<img src = "https://img.shields.io/static/v1?label=Difficulty&message=Easy&color=brightgreen" />

Make the text within the button display the number of times the button has been clicked.

```htmls
<button>Clicks: <span id="count">0</span></button>
```

## Solutions

## Vaniala JS Solution

```js
const button = document.querySelector("button");
let count = 0;

button.addEventListener("click", function () {
  count++;
  document.getElementById("count").textContent = count + "";
});
```

## React JS Solution

```js
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={clickHandler}>Clicks: {count}</button>
    </div>
  );
}
```
