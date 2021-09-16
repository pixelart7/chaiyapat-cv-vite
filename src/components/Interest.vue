<template lang="pug">
.interest.bg-white.rounded-xl.p-6
  h2.text-2xl.font-bold.mb-3.mt-4 Interests
  ul.grid-cols-2.gap-1.space-y-1.list-disc.ml-4(class="sm:list-none sm:ml-0 sm:grid sm:space-y-0")
    li Calm Technology
    li Front-end Development
    li UI/UX Design
    li Project Management
    li Foreign Cultures
    li Traveling
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // setup() {},
});
</script>

<style lang="scss">
// .interest {}
</style>
