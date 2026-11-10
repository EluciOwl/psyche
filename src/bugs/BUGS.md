# Psyche - Bug Log

<img src="https://img.shields.io/badge/bugs%20logged-11-fac775?style=for-the-badge&labelColor=1c1c1c" height="32">

---

> **Symbols** &nbsp; 🐛 bug &middot; 🔍 cause &middot; 🔧 fix &middot; 💡 takeaway &middot; 👀 watch &middot; ⚠️ warning

<details open>
<summary><b>2026-11-10</b> &nbsp;·&nbsp; <code>css</code> <code>animation</code></summary>

### `ThoughtsScreen.css` - Card blur only showed up after 2 seconds

- **🐛** `backdrop-filter: blur()` on the cards did nothing. After removing `forwards` from the screen's fade, the blur only appeared once the 2s fade had finished.
- **🔍** `.thoughts-screen` animated `opacity` with `fadeIn`. A parent with animated opacity becomes a backdrop root: it's painted on its own sheet, so the cards can only blur what's on that sheet, and the Background isn't. `forwards` kept that state on forever.
- **🔧** Split `fadeIn` into `grow` (transform only) and `appear` (opacity only). The screen only zooms, the cards, input row and home button fade themselves.
- **💡** A fading parent is painted on its own empty sheet first, then laid over the page. The card's blur looks at that empty sheet, not the background, so the fade has to sit on the card itself.
- **👀** `transform` on a parent is fine. `opacity`, `filter` and `mask` on a parent block the blur.

</details>

<details>
<summary><b>2026-11-02</b> &nbsp;·&nbsp; <code>events</code> <code>dom</code></summary>

### `Background.jsx` - mouseleave on window never fired

- **🐛** Moving the mouse out of the browser left the parallax layers stuck instead of returning to the center.
- **🔍** Attached `mouseleave` to `window`. The event means "the mouse left this element's box", but `window` is the browser tab, not an element, so many browsers never send it.
- **🔧** Attached it to the `<html>` element instead: `document.documentElement.addEventListener("mouseleave", ...)`.
- **💡** `mouseleave` only fires on elements, because it needs edges to cross. `window` isn't an element, `<html>` is.
- **👀** Plain `document` also works in modern Chrome and Firefox, but `document.documentElement` is the safe pick across browsers.

</details>

<details>
<summary><b>2026-10-25</b> &nbsp;·&nbsp; <code>render</code> <code>state</code></summary>

### `Background.jsx` - Stars rerolled on every render

- **🐛** Adding a thought or deleting a cloud made the whole sky jump to new star positions.
- **🔍** The stars were built with `Math.random()` right in the component body. `thoughts` lives in App, so every change re-renders App and Background with it, and the stars got rebuilt each time.
- **🔧** Wrapped the star builder in a lazy initializer: `useState(() => Array.from(...))`.
- **💡** A render is a recipe, cooked again every time. Random inside the recipe means a new dice roll each cook. A lazy `useState` cooks once and remembers.

</details>

<details>
<summary><b>2026-09-27</b> &nbsp;·&nbsp; <code>events</code> <code>render</code></summary>

### `EmotionsScreen.jsx` - Alert fired on render instead of click

- **🐛** Clicking "Emotions" on the main screen spammed 12 alerts in an endless loop.
- **🔍** Wrote `onClick={alert("...")}`. The parentheses call it right away during render, once per emotion box. `useTypewriter` re-renders every 200ms, so it never stops.
- **🔧** Wrapped it in an arrow function: `onClick={() => alert("...")}`.
- **💡** Pass the function, don't call it. `fn` wires the doorbell, `fn()` rings it right now.

</details>

<details>
<summary><b>2026-09-07</b> &nbsp;·&nbsp; <code>hooks</code></summary>

### `ThoughtsScreen.jsx` - useEffect inside the click handler

- **🐛** Clouds added, input never cleared, nothing saved.
- **🔍** Put the save effect in `addThought()`. React counts hooks per render to match state to slots. A handler runs outside the render pass, so the count breaks.
- **🔧** Moved the effect to the component body, next to the state.
- **💡** Hooks are numbered seats. Same seats, same order, every render. No `if`, no loops, no nested functions.
</details>

<details>
<summary><b>2026-08-30</b> &nbsp;·&nbsp; <code>modules</code> <code>state</code> <code>effects</code></summary>

### `useTypewriter.js` - No export in hook file

- **🐛** `does not provide an export named 'default'`
- **🔍** Function had no `export` keyword, import used default form.
- **🔧** Added `export`, changed import to `{ useTypewriter }`.
- **💡** Named export needs braces, default doesn't. Both sides must match.

### `useTypewriter.js` - Assigned variable instead of state

- **🐛** Typewriter ran, placeholder stayed empty.
- **🔍** Copied vanilla `placeholder = ...`. In React that variable is connected to nothing.
- **🔧** Used `setWriting(...)` instead.
- **💡** Only state changes trigger a repaint. Never assign, always call the setter.

### `useTypewriter.js` - setInterval in render body

- **🐛** Every render started another timer.
- **🔍** Side effects don't belong in the render pass.
- **🔧** Moved it into `useEffect` with `[]` and a `clearInterval` cleanup.
- **💡** Render describes, effects act.

### `useTypewriter.js` - Hook returned nothing

- **🐛** `useTypewriter(...)` gave back `undefined`.
- **🔍** State updated fine, but no `return` statement.
- **🔧** Added `return writing` at the end of the hook.
- **💡** React re-runs the hook on every render, so one return line is enough.

</details>

<details>
<summary><b>2026-08-23</b> &nbsp;·&nbsp; <code>state</code> <code>lists</code></summary>

### `ThoughtsScreen.jsx` - Too many re-renders

- **🐛** Nothing rendered, React aborted with "Too many re-renders".
- **🔍** `setThoughts(...)` sat loose in the component body, so it ran on every render.
- **🔧** Wrapped it in `addThought()`, called from the button and Enter.
- **💡** Render describes the UI. Changing state is an action and needs a trigger.

### `ThoughtsScreen.jsx` - Duplicate keys in the cloud list

- **🐛** Adding the same thought twice gave two clouds with the same key.
- **🔍** Used the thought text as `key`, since `thoughts` held plain strings.
- **🔧** Thoughts are objects now: `key={thought.id}`, `{thought.text}` for display.
- **💡** Keys must be stable and unique. Displayed data is neither, the user can repeat it.

</details>
