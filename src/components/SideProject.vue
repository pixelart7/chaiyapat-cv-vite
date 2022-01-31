<template lang="pug">
.side-project.bg-white.rounded-xl.p-6
  h2.text-2xl.font-bold.mb-3.mt-2 Side Projects
  div
    .-mx-6: hr.mt-2.mb-4
    div
      .max-h-48.overflow-hidden.-mx-3.rounded-xl.border.border-gray-100
        img.w-full.object-cover(alt="Image of my side project: \"To\" Link Shortener" src="https://res.cloudinary.com/djtg2hopi/image/upload/v1631782508/portfolio-vite/to.jpg")
      h3.text-xl.font-semibold.leading-tight.mt-6 To. Link Shortener
      h5.text-xs.font-medium.text-gray-500 2019
      p.mt-3.leading-tight: .
        An educational link shortener service that I built in order to learn AMP framework.
      .mt-2
        h5.inline.mr-1.font-semibold Live:
        a.underline(class="hover:text-gray-600" href="https://to-url-shortener.netlify.app/" target="_blank") to-url-shortener.netlify.app
        br
        h5.inline.mr-1.font-semibold Source:
        a.underline(class="hover:text-gray-600" href="https://github.com/pixelart7/to-link-shortener-web" target="_blank") github.com/pixelart7/to-link-shortener-web
        | ,
        |
        a.underline(class="hover:text-gray-600" href="https://github.com/pixelart7/to-link-shortener-surge-sh" target="_blank") /to-link-shortener-surge-sh
    .-mx-6: hr.mt-6.mb-4
    div
      .max-h-48.overflow-hidden.-mx-3.rounded-xl.border.border-gray-100
        img.w-full.object-cover(alt="Image of my side project: Gimme Money" src="https://res.cloudinary.com/djtg2hopi/image/upload/v1631783474/portfolio-vite/gimme.jpg")
      h3.text-xl.font-semibold.leading-tight.mt-6 Gimme Money
      h5.text-xs.font-medium.text-gray-500 2019
      p.mt-3.leading-tight: .
        Designed and built a simple application built on Vue with PWA for
        generating a PromptPay QR code with the desired amount of money.
      .mt-2
        h5.inline.mr-1.font-semibold Live:
        a.underline(class="hover:text-gray-600" href="https://gimme.netlify.app" target="_blank") gimme.netlify.app
        br
        h5.inline.mr-1.font-semibold Source:
        a.underline(class="hover:text-gray-600" href="https://github.com/pixelart7/gimme-money" target="_blank") github.com/pixelart7/gimme-money
    .-mx-6: hr.mt-6.mb-4
    div
      .max-h-48.overflow-hidden.-mx-3.rounded-xl.border.border-gray-100
        img.w-full.object-cover(alt="Image of my side project: Lyrics Base" src="https://res.cloudinary.com/djtg2hopi/image/upload/v1631784854/portfolio-vite/lyrics.jpg")
      h3.text-xl.font-semibold.leading-tight.mt-6 Lyrics Base
      h5.text-xs.font-medium.text-gray-500 2018
      p.mt-3.leading-tight: .
        Designed and developed a web-based application on Vue with PWA
        for storing lyrics in two languages. The app is built with
        LocalStorage.js where all data are stored on the user's Google Drive.
      .mt-2
        h5.inline.mr-1.font-semibold Live:
        a.underline(class="hover:text-gray-600" href="http://lyricsbase.pix7.me" target="_blank") lyricsbase.pix7.me
        br
        h5.inline.mr-1.font-semibold Source:
        a.underline(class="hover:text-gray-600" href="http://github.com/pixelart7/lyrics-base-2" target="_blank") github.com/pixelart7/lyrics-base-2
    .-mx-6: hr.mt-6.mb-4
    div
      .max-h-48.overflow-hidden.-mx-3.rounded-xl.border.border-gray-100
        img.w-full.object-cover(alt="Image of my side project: Hon no Jisho" src="https://res.cloudinary.com/djtg2hopi/image/upload/v1631785007/portfolio-vite/hon.jpg")
      h3.text-xl.font-semibold.leading-tight.mt-6 Hon no Jisho
      h5.text-xs.font-medium.text-gray-500 2018
      p.mt-3.leading-tight: .
        Designed and developed a web-based application on Vue with PWA
        for storing book vocabulary in Japanese and English. Words are separated
        by section and chapters with an additional API calls to Japanese-English dictionary.
      .mt-2
        h5.inline.mr-1.font-semibold Live:
        a.underline(class="hover:text-gray-600" href="https://hon-no-jisho.firebaseapp.com" target="_blank") hon-no-jisho.firebaseapp.com
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // setup() {},
});
</script>

<style lang="scss">
// .image-shadow-inset {
//   @apply relative;
// }
// .image-shadow-inset::after {
//   @apply absolute inset-0;
//   content: '';
//   background: linear-gradient(to bottom, transparent, transparent 65%, rgba(255, 255, 255, 0.6) 90%, rgba(255, 255, 255, 1))
// }
</style>
