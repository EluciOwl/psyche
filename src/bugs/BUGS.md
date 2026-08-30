# Psyche - Bug Log

<img src="https://img.shields.io/badge/bugs%20logged-6-fac775?style=for-the-badge&labelColor=1c1c1c" height="32">

---

> **Symbols** &nbsp; 🐛 bug &middot; 🔍 cause &middot; 🔧 fix &middot; 💡 takeaway &middot; 👀 watch &middot; ⚠️ warning

<details open>
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
