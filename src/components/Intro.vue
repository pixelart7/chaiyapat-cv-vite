<template lang="pug">
.intro
  .bg-white.rounded-xl
    .p-6
      p.text-right.hidden(class="print:block") Scan this QR code to visit an online version of this resume
      .flex
        img.rounded-full.w-20.h-20(src="/assets/profile@2x.jpg")
        .flex-1
        img.w-20.h-20(src="/assets/qr.png")
      .mt-4(class="md:flex")
        div
          h1.text-3xl.font-bold Chaiyapat Tantiworachot
          h2.text-2xl.font-bold.text-gray-700 Solution Developer
          p.mt-2.leading-tight: .
            A computer science student with a mixture of experience.
            Capable of working and leading in a team environment.
            Passionate about human-computer interaction and front-end development.
        .w-full.mt-4(style="max-width: 420px;" class="md:mt-0 md:text-right")
          Contact
    .bg-gray-100.rounded-bl-xl.rounded-br-xl.py-3.px-6.text-xs.text-gray-400(class="transition-colors duration-100 hover:text-gray-600")
      h4.inline.font-medium.mr-1 Alias / Affiliation:
      ul.aliases
        li YWC18
        li PIX7 of <a class="underline hover:opacity-80" href="https://www.youtube.com/plearngaming" target="_blank">PlearnGaming</a>
        li KMUTT IA Buddies
        li 2B-KMUTT Staff #7
        li 2B-KMUTT #11
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
ul.aliases {
  @apply inline ;
  li {
    @apply inline;
    &::after {
      content: ', ';
    }
    &:last-child::after {
      @apply hidden;
    }
  }
}
</style>
