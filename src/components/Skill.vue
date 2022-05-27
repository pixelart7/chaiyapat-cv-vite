<template lang="pug">
.skill.bg-white.rounded-xl.p-6
  h2.text-2xl.font-bold.mb-3.mt-2 Technical Skills
  h4.font-semibold Programming Languages
  p.mb-2 JavaScript and TypeScript, CSS (SCSS), Pug, Python, PHP
  h4.font-semibold Libraries, Frameworks and Tools
  p.mb-2 Nuxt 3, Vue 3, TailwindCSS, PixiJS, ThreeJS, PWA, Firebase, Sketch, Laravel
  h2.text-2xl.font-bold.mb-3.mt-4 Soft Skills
  ul.grid-cols-2.gap-1.space-y-1.list-disc.ml-4(class="sm:list-none sm:ml-0 sm:grid sm:space-y-0")
    li Problem Solving
    li Data Collection & Analysis
    li Communication
    li Teamwork
    li Presentation
    li Public Speaking
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // setup() {},
});
</script>

<style lang="scss">
// .skill {}
</style>
