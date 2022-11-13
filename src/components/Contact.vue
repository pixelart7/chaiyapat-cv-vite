<template lang="pug">
.contact
  //- div
    span.text-gray-400.mr-2.font-light.inline-block.w-16(class="md:w-auto") tel.
    span.font-medium +66-81-5496692
  div
    span.text-gray-400.mr-2.font-light.inline-block.w-16(class="md:w-auto") email.
    span.font-medium chaiyapat@pix7.me
  div
    span.text-gray-400.mr-2.font-light.inline-block.w-16(class="md:w-auto") in.
    span.font-medium
      a.underline(class="hover:text-gray-600" href="https://linkedin.com/in/chaiyapat-t" target="_blank") linkedin.com/in/chaiyapat-t
  div
    span.text-gray-400.mr-2.font-light.inline-block.w-16(class="md:w-auto") github.
    span.font-medium
      a.underline(class="hover:text-gray-600" href="https://github.com/pixelart7" target="_blank") github.com/pixelart7
  div
    span.text-gray-400.mr-2.font-light.inline-block.w-16(class="md:w-auto") profile.
    span.font-medium
      a.underline(class="hover:text-gray-600" href="https://pixelart7.github.io" target="_blank") pixelart7.github.io
  //- div
    span.text-gray-400.mr-2.font-light.inline-block.w-16(class="md:w-auto") blog.
    span.font-medium
      a.underline(class="hover:text-gray-600" href="https://chaiyapat.medium.com" target="_blank") chaiyapat.medium.com
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // setup() {},
});
</script>

<style lang="scss">
// .contact {}
</style>
