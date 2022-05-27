<template lang="pug">
.education.bg-white.rounded-xl.p-6
  h2.text-2xl.font-bold.mb-3.mt-2 Education
  div
    .-mx-6: hr.mt-2.mb-4
    div
      h3.text-xl.font-semibold.leading-tight M.E. Electrical Engineering and Computer Science
      h3.text-xl.font-semibold.leading-tight 
      h4.font-semibold.leading-tight Shibaura Institute of Technology
      h4.leading-tight Tokyo, Japan
      h5.text-xs.font-medium.text-gray-500
        | 04/2021 - <span class="text-primary-800">03/2023</span> <span class="text-medium text-white px-2 bg-primary-700 rounded ml-1">Expected</span>
      p.mt-3.leading-tight.
        Member of <a class="underline hover:text-gray-600" href="http://pai.ise.shibaura-it.ac.jp/" target="_blank">Physically Augmented Interaction Laboratory</a>
        <br/>
        MEXT Scholarship (Monbukagakusho) recipient
      h6.mt-2.font-semibold.text-sm Publications:
      ul.list-disc.ml-4.leading-tight.mt-1.space-y-2.text-gray-800.text-sm
        li
          | <span class="font-semibold">Chaiyapat Tantiworachot</span> and Hiroyuki Manabe. 2022.
          | Summer Skybox: A Device Representing the Sky for Personalized Day Cycle.
          | In 13th Augmented Human International Conference (AH2022).
          | Association for Computing Machinery, New York, NY, USA, Article 9, 1-4.
          |
          a(class="underline hover:text-gray-600" href="https://doi.org/10.1145/3532525.3532532" target="_blank") https://doi.org/10.1145/3532525.3532532
      h6.mt-3.font-semibold.text-sm Area of study:
      p.leading-tight.
        Human-computer Interaction, Calm Technology, Peripheral Vision, Perception of Time
      ul.list-disc.ml-4.leading-tight.mt-3.space-y-2.text-gray-800.text-sm
        li
          span.font-semibold.mr-2 2022
          | Work at Global Learning Commons, a place for international discussion, as a student staff
        li
          span.font-semibold.mr-2 2021
          | Develop a laboratory tour reservation system using Google App Script
    .-mx-6: hr.mt-6.mb-4
    div
      h3.text-xl.font-semibold.leading-tight B.Sc. Computer Science
      h4.font-semibold.leading-tight King Mongkut’s University of Technology Thonburi
      h4.leading-tight Bangkok, Thailand
      h5.text-xs.font-medium.text-gray-500
        | 07/2015 - 11/2019
        br
        | Cumulative GPA: 3.80
      ul.list-disc.ml-4.leading-tight.mt-3.space-y-2.text-gray-800.text-sm
        li
          span.font-semibold.mr-2 2019
          | Volunteer as a registrar in the event called
          |
          a.underline(class="hover:text-gray-600" href="https://www.eventpop.me/e/5651-azure-summer-spark", target="_blank") Azure Summer Spark
          |  held by KMUTT Microsoft Student Partner
        li
          span.font-semibold.mr-2 2019
          | Co-lead a seminar event on "
          a.underline(class="hover:text-gray-600" href="https://www.eventpop.me/e/5244-election-2019-the-future-of-science-and-technology", target="_blank") Thailand Election 2019: The Future of Thai Science and Technology
          | "
        li
          span.font-semibold.mr-2 2017 - 2018
          | One year study exchange to
          |
          a.underline(class="hover:text-gray-600" href="https://www.shibaura-it.ac.jp/en/", target="_blank") Shibaura Institute of Technology
          |  in Tokyo, Japan.
        li
          span.font-semibold.mr-2 2016 - 2017
          | Volunteer as the working group of KMUTT Cartoon Club.
        li
          span.font-semibold.mr-2 2016 - 2017
          | Participate in gPBL program twice, one in Japan and one in Thailand.
        li
          span.font-semibold.mr-2 2016
          .
            Participate in international affair department as
            buddies to assist foreign students.
        li
          span.font-semibold.mr-2 2015 - 2017
          | Lead the developer team of 2B-KMUTT camp to create an in-camp registrar program.
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // setup() {},
});
</script>

<style lang="scss">
// .education {}
</style>
