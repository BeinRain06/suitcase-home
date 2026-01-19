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
