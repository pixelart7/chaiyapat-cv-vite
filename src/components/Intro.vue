<template lang="pug">
.intro
  .bg-white.rounded-xl.p-6
    .flex
      img.rounded-full.w-20.h-20(src="/assets/profile@2x.jpg")
      .flex-1
      p.hidden(class="print:block") Scan this QR code to visit an online version of this resume
      img.w-20.h-20(src="/assets/qr.png")
    .mt-4(class="sm:flex")
      div
        h1.text-3xl.font-bold Chaiyapat Tantiworachot
        h2.text-2xl.font-bold.text-gray-700 Solution Developer
        p.mt-2.leading-tight: .
          A computer science student with a mixture of experience.
          Capable of working and leading in a team environment.
          Passionate about human-computer interaction and front-end development.
      .w-full.mt-4(style="max-width: 360px;" class="sm:mt-0 sm:text-right")
        Contact
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Contact from './Contact.vue';

export default defineComponent({
  components: { Contact }
  // setup() {},
});
</script>

<style lang="scss">
// .intro {}
</style>
