<template lang="pug">
#side-project.bg-white.rounded-xl.p-6(class="print:p-0")
  h2.text-2xl.font-bold.mb-3.mt-2 Side Projects
  div
    Spacer(forHeading)
    div
      div(class="md:flex md:space-x-3 print:space-x-0")
        .flex-1.max-h-48.overflow-hidden.rounded-xl.border.border-gray-100(class="print:hidden")
          img.w-full.object-cover(alt="Image of my home e-ink ambient display" src="/assets/home-ambient-display.jpg")
        .flex-1.min-w-96.justify-end.flex-col(class="md:flex")
          h3.text-xl.font-semibold.leading-tight.mt-6(class="md:mt-0") Personal Cloud & IoTs
          h5.text-xs.font-medium.text-gray-500 Ongoing Hobby
      p.mt-3.leading-tight: .
        In my free time, I work on my cloud for self-hosting applications and the integration of various IoT devices.
        I have several servers on the cloud and a Raspberry Pi running as a home server, both are just for fun.
        On the cloud, I setup the majority of applications using Docker, apply security with VPN and firewall.
      p.text-sm.mt-3.leading-tight: .
        Image: an e-ink ambient display that runs on M5Stack's M5Paper.
        Information is fetched and aggregated on the cloud then this device periodically refreshes itself.
        (<a class="underline hover:text-gray-600" href="https://github.com/pixelart7/m5paper-micropython-data-text-display" target="_blank">github.com/pixelart7/m5paper-micropython-data-text-display</a>)
    Spacer(hideOnPrint)
    div
      h3.text-xl.font-semibold.leading-tight.mt-6(class="md:mt-0") Localization File (.uasset) Parser
      h5.text-xs.font-medium.text-gray-500 2019
      p.mt-3.leading-tight: .
        A quick (and probably dirty) .uasset parser for my friend, "chaisiam" at PlearnGaming.
        He works on an <span class="font-semibold">unofficial</span> Thai localization mod for a game.
        I helped him parse .uasset file to .csv so that he can work easily.
      .mt-2
        h5.inline.mr-1.font-semibold Source:
        a.underline(class="hover:text-gray-600" href="https://github.com/pixelart7/uasset-parser" target="_blank") github.com/pixelart7/uasset-parser
    Spacer(hideOnPrint)
    div
      div(class="md:flex md:space-x-3 print:space-x-0")
        .flex-1.max-h-48.overflow-hidden.rounded-xl.border.border-gray-100(class="print:hidden")
          img.w-full.object-cover(alt="Image of my side project: \"To\" Link Shortener" src="/assets/to.jpg")
        .flex-1.min-w-96.justify-end.flex-col(class="md:flex")
          h3.text-xl.font-semibold.leading-tight.mt-6(class="md:mt-0") To. Link Shortener
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
    Spacer(hideOnPrint)
    div
      div(class="md:flex md:space-x-3 print:space-x-0")
        .flex-1.max-h-48.overflow-hidden.rounded-xl.border.border-gray-100(class="print:hidden")
          img.w-full.object-cover(alt="Image of my side project: Gimme Money" src="/assets/gimme.jpg")
        .flex-1.min-w-96.justify-end.flex-col(class="md:flex")
          h3.text-xl.font-semibold.leading-tight.mt-6(class="md:mt-0") Gimme Money
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
    Spacer(hideOnPrint)
    div
      div(class="md:flex md:space-x-3 print:space-x-0")
        .flex-1.max-h-48.overflow-hidden.rounded-xl.border.border-gray-100(class="print:hidden")
          img.w-full.object-cover(alt="Image of my side project: Lyrics Base" src="/assets/lyrics.jpg")
        .flex-1.min-w-96.justify-end.flex-col(class="md:flex")
          h3.text-xl.font-semibold.leading-tight.mt-6(class="md:mt-0") Lyrics Base
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
    Spacer(hideOnPrint)
    div
      div(class="md:flex md:space-x-3 print:space-x-0")
        .flex-1.max-h-48.overflow-hidden.rounded-xl.border.border-gray-100(class="print:hidden")
          img.w-full.object-cover(alt="Image of my side project: Hon no Jisho" src="/assets/hon.jpg")
        .flex-1.min-w-96.justify-end.flex-col(class="md:flex")
          h3.text-xl.font-semibold.leading-tight.mt-6(class="md:mt-0") Hon no Jisho
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
import Spacer from './Spacer.vue';

export default defineComponent({
  // setup() {},
  components: { Spacer }
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
