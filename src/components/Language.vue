<template lang="pug">
#language.bg-white.rounded-xl.p-6(class="print:p-0")
  h2.text-2xl.font-bold.mb-3.mt-2 Languages
  ul.grid-cols-2.gap-1.space-y-1.leading-tight.list-disc.ml-4(class="sm:list-none sm:ml-0 sm:grid sm:space-y-0 print:list-disc print:block print:ml-4 print:space-y-1")
    li
      h5.font-semibold.text-lg(class="print:text-base") Thai
      .font-medium(class="print:text-sm") Native
    li
      h5.font-semibold.text-lg(class="print:text-base") English
      .font-medium(class="print:text-sm") Fluent
      .text-sm.text-gray-600.font-medium(class="print:text-sm") TOEIC: 985/990
      .text-xs.text-gray-400(class="print:text-sm") (Already expired on Nov 26, 2021)
    li
      h5.font-semibold.text-lg(class="print:text-base") Japanese
      .font-medium(class="print:text-sm") Basic
      .text-sm.text-gray-600.font-medium(class="print:text-sm") JLPT: N4
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
