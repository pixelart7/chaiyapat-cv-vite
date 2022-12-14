<template lang="pug">
#work.bg-white.rounded-xl.p-6(class="print:p-0")
  h2.text-2xl.font-bold.mb-3.mt-2 Work Experiences
  .space-y-6
    div
      h3.text-xl.font-semibold.leading-tight Freelance Web Solution Developer
      h5.text-xs.font-medium.text-gray-500 Availability varies (have been accepting freelance work since 2016)
      p.mt-3.leading-tight: .
        Trusted by many agencies and companies, I work in my free-time.
        The scope of work that I usually involved with is in the front-end web development
        and technical project requirement gathering & planning.
      p.mt-3.leading-tight Some of the final result that I worked before:
      ul.text-sm.list-disc.ml-4.mt-2
        li Single-page web apps: gave advice/work in some module in the big systems
        li Landing pages: work on developing a front-end sites
        li An interactive microsite: a short dress-up social game, a quiz for a commemorative event
        li An interactive web for digital signage: as part of a valentine event, displayed in a signage screen at Siam area, Bangkok
        li A web-based livestream overlay: an overlay for a livestreaming event of Bangkok Election 2022
        li A website for an academic conference: <a href="https://icome.tsme.org/icome2022/" target="_blank" class="underline hover:text-gray-600">TSME-ICoME 2022</a>
        li A website for a V-Tubers agency: <a href="https://algorhythm.realic.net/" target="_blank" class="underline hover:text-gray-600">Algorhythm Project</a>
    div
      h3.text-xl.font-semibold.leading-tight Senior Solution Developer (former Front-end Web Developer) (Remote)
      h4.font-semibold Idea Vivat
      h5.text-xs.font-medium.text-gray-500 10/2019 - 03/2021 (Full-time), 04/2021 - 06/2021 (Part-time)
      p.mt-3.leading-tight: .
        I work from a requirement gathering phase until the delivery of the solution.
        I am involved in both designing phase and developing phase.
    div
      h3.text-xl.font-semibold.leading-tight Game Server Administrator (Self-employed)
      h4.font-semibold Siam Minecraft
      h5.text-xs.font-medium.text-gray-500 2012 - 2015
      p.mt-3.leading-tight: .
        Experienced in non-profit Minecraft game server administration.
        Built the web application used by players and staff team.
  Spacer
  h3.text-xl.font-bold.mb-3.mt-2 Short-term
  .space-y-6
    div
      h3.text-lg.font-semibold.leading-tight Front-end Web Developer (Contract)
      h4.text-sm.font-medium.text-gray-600 Idea Vivat
      h5.text-xs.font-medium.text-gray-500 2016 - 2017, 04/2019 - 09/2019
      p.mt-3.leading-tight.text-sm: .
        Work project-based as part of the team at Idea Vivat.
        I involved in projects, such as POS system and money borrowing/lending system.
    div
      h3.text-lg.font-semibold.leading-tight Product Management Trainee (Contract)
      h4.text-sm.font-medium.text-gray-600 Digital Marketing at G-Able
      h5.text-xs.font-medium.text-gray-500 09/2018 - 01/2019
      p.mt-3.leading-tight.text-sm: .
        Collaborate in a team environment in order to deliver an application
        and a solution as the client needs.
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
// .work {}
</style>
