## Lessons Learned doing the project

### Efficiently hide some "components" when routing to a specific "link path"

> E.g : hide "header" and and "sidebar" in customizePage (route: /customize)

#### use an immediate "watcher"

```js
// Source - https://stackoverflow.com/a
// Posted by Steven B., modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-18, License - CC BY-SA 4.0

watch: {
  $route: {
     immediate: true,
     handler(to, from) {
         if(this.$route.path == '/customize') {
           this.isCustomizePage = true;
         } else {
            this.isCustomizePage = false;
         }
     }
  }
}

```

- view specific answer and example templates writing in the link solution below :

Links : [https://stackoverflow.com/questions/62936672/vuejs-rendering-components-conditionally-based-on-route](https://stackoverflow.com/questions/62936672/vuejs-rendering-components-conditionally-based-on-route)

<br/>

### write better components in vuejs

Link: [https://www.youtube.com/watch?v=AHDXeaYV8S0&t=43s](https://www.youtube.com/watch?v=AHDXeaYV8S0&t=43s)

### v-for loop binding reference (ref to each element)

Dynamically bind multiple refs to elements use in loop v-for

> e.g : practical case

```vue
<script setup>
import { ref } from "vue";

const itemRefs = ref({}); // Use an object to store refs with specific keys

const items = ref([
  { id: 1, name: "Item A" },
  { id: 2, name: "Item B" },
  { id: 3, name: "Item C" },
]);

// A function to assign the element reference using a dynamic key
const setItemRef = (el, id) => {
  if (el) {
    itemRefs.value[id] = el;
  }
};

// Example of accessing a ref (e.g., focusing the first input)
const focusFirstItem = () => {
  if (itemRefs.value[1]) {
    itemRefs.value[1].focus(); // If 'el' is an input element
  }
};
</script>

<template>
  <div v-for="item in items" :key="item.id">
    <!-- Bind the ref to the setItemRef function -->
    <input
      type="text"
      :ref="(el) => setItemRef(el, item.id)"
      :value="item.name"
    />
  </div>
  <button @click="focusFirstItem">Focus First Item</button>
</template>
```

### use effectively reactivity "ref" in OPTION API - vuejs

If the **ref** is used to bind an **HTMLElement** the way to call it in <script></script> syntax is to use **$refs**

e.g : **this.$refs.SelectLangRef**

If rather ref is just used to bear primitive value, or object or array elements the syntax call is direct

e.g : **this.itemsRef**

```vue
<script>
export default { setup() { ... return {...} }, methods: { ... }, mounted() { if
(this.itemsRef) {
  /* ref in use as array of items */
this.itemsRef[0].classList.add("active__navlink"); }

/* ref in use as HTMLElement */
const callElement =
this.$refs.selectLangRef; } }
const finalValue= callElement.value
</script>
```

### Create A Slider Button From Number 1 to Number 3

This slider after reflection and trial took me **03 hours** to finally figure out the right **formula** that will made me slide from Number **1** to Number **3** using `arrow-right` or `arrow-left` click.

**Parent child Box Content** (`child Box Content`,)

- position = relative; width = 104px; height:48px; padding-inline: 0.5rem;

<br/>

**child Box Content** (`arrow-left`, `gut-arrow-number`, `arrow-right`)

- position = relative; width = 100%; height:48px; overflow-hidden; with flex in x-axis

`arrow-left` - width = 24px; height: 42px;
`arrow-right` - width = 24px; height: 42px;
`gut-arrow-number` - width = 11px;

<br/>

**Box Numbers** (`1`, `2`, `3`) --in--> **child Box Content**

`class="cta__numbers-play" in *ProjectCallPage*`

**Function Logic:** handleArrowSlide Fn

- position = absolute; left: 24px //width of arrow; width = 150px; height:42px; padding-inline: 11px; with flex in x-axis; gap: 36px //gapBetweenNumber; overflow: hidden; then add transition

**Box Number** (`1`) 0r (`2`) or (`3`)

- width: 20px //widthBoxNumber; height: 100%; border: 1px solid var(--accent-color-2);border-radius: 28%; with grid display, place-items-center;

#### The Formula

Goal: Manipulate **left** position

> **numberMagicShift** = padding-inline/2 + widthBoxNumber + (gapBetweenNumber - padding-inline/2);

> marginError = 1px;

> indexNumber (--clicked--) = 0 0r 1 0r 2 (0 <- click "1", 1 <- click "2", 2 <- click "3")

1. Clicking `arrow-right` (`>`)

> **formula:** **left** = Exleft - numberMagicShift + (marginError\*indexNumber);

> **edge condition:** **left** === -85px ? Yes => return

<br/>

N.B: **edge number** is calculated manually and depend of the quantity of button we display (--here is 03 buttons--)

2. Clicking `arrow-left` (`<`)

> **formula:** **left** = Exleft + numberMagicShift - marginError\*indexNumber + 1;

> **edge condition:** **left** === -85px ? Yes => return

<br/>

### Couple Methods To Submit Form content Contact Page in Direction of Exiting Emails

There are many available methods to send form content to real email address. Some use back-end logic , some use can be implement with REST API or Via Browser Function logic (no backend needed).

Here below i just list the technique when you have no backend , as for sending email on the backend changes based on the back-end environment you use (NodeJs, Python, PHP, Transactional Email APIs, serverless/edge functions, Self-Hosted SMTP Relay):

**Browser Side (no backend)**

- EmailJS
- Formspree
- Web3Forms
- Basin
- Netlify Forms (if hosted on Netlify)
- Vercel Edge Functions with built-in mailer
