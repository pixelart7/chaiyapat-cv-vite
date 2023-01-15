<template lang="pug">
.app#top
  .mx-auto.w-full(style="max-width: 1104px;")
    //- Navigation.-mt-2.mb-2.-mx-2.sticky.top-0(class="sm:mx-0 print:hidden")
    .p-2.min-h-screen.flex.items-center.justify-center
      MovingForward(:countdown="countdown")
    //- Intro
    //- .mt-2(class="print:hidden")
    //-   .space-y-2(v-if="!largerThanSm")
    //-     About
    //-     Work
    //-     Education
    //-     Skill
    //-     Language
    //-     Interest
    //-     SideProject
    //-   .grid.grid-cols-2.gap-2(v-if="largerThanSm")
    //-     .space-y-2
    //-       Work
    //-       SideProject
    //-     .space-y-2
    //-       Education
    //-       About
    //-       Skill
    //-       Language
    //-       Interest
    //- .hidden.mt-2.space-y-2(class="print:block")
    //-   .grid.grid-cols-2.gap-2.page-break-after
    //-     Work
    //-     Education
    //-   .grid.grid-cols-2.gap-2
    //-     .space-y-2
    //-       About
    //-       Skill
    //-       Language
    //-       Interest
    //-     .space-y-2
    //-       SideProject
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

import MovingForward from './components/MovingForward.vue';
import Intro from './components/Intro.vue';
import Skill from './components/Skill.vue';
import Work from './components/Work.vue';
import SideProject from './components/SideProject.vue';
import Education from './components/Education.vue';
import Language from './components/Language.vue';
import Interest from './components/Interest.vue';
import About from './components/About.vue';
import Navigation from './components/Navigation.vue';

const components = { Intro, Skill, Work, SideProject, Education, Language, Interest, About, Navigation, MovingForward };

export default defineComponent({
  setup() {
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const largerThanSm = breakpoints.greater('sm')

    const countdown = ref(5);

    function runCountdown() {
      countdown.value -= 1;
      if (countdown.value <= 0) {
        document.location.href = 'https://chaiyapat.pix7.me/about';
      } else {
        setTimeout(runCountdown, 1000);
      }
    }

    onMounted(() => {
      setTimeout(runCountdown, 1000);
    })

    return {
      largerThanSm,
      countdown,
    }
  },
  components,
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700&display=swap');
// .app {
// }
</style>
