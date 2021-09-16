<template lang="pug">
.language.bg-white.rounded-xl.p-6
  h2.text-2xl.font-bold.mb-3.mt-2 Languages
  ul.grid-cols-2.gap-1.space-y-1.leading-tight.list-disc.ml-4(class="sm:list-none sm:ml-0 sm:grid sm:space-y-0")
    li
      h5.font-semibold.text-lg Thai
      .font-medium Native
    li
      h5.font-semibold.text-lg English
      .font-medium Fluent
      .text-sm.text-gray-600.font-medium TOEIC: 985/990
      .text-xs.text-gray-400 (Score valid until Nov 26, 2021)
    li
      h5.font-semibold.text-lg Japanese
      .font-medium Basic
      .text-sm.text-gray-600.font-medium JLPT: N4
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // setup() {},
});
</script>

<style lang="scss">
// .language {}
</style>
