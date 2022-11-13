<template lang="pug">
.navigation.leading-relaxed.border-b(
  ref="navigation"
  class="sm:border-b sm:border-l sm:border-r border-black/10 bg-white/40 backdrop-blur-lg sm:rounded-br-xl sm:rounded-bl-xl"
)
  .overflow-x-auto.px-3.py-1(class="sm:overflow-x-visible")
    .flex.flex-nowrap.items-center.-mx-1(class="sm:flex-wrap")
      .inline.text-xs.text-primary-900.px-1.mb-2.opacity-70.mt-2.whitespace-nowrap.text-center.leading-none(class="sm:w-auto sm:mb-0 sm:mt-0 sm:whitespace-normal")
        .hidden(class="sm:block") Jump to:
        .block(class="sm:hidden") Jump<br />to
      a.px-3.py-1.m-1.rounded-full.border.font-medium.text-gray-700.whitespace-nowrap(
        v-for="(name, link) in links"
        :id="`nav-${link}`"
        :href="`#${link}`"
        @click.prevent="smoothTransition(link)"
        class="border-gray-800/10 bg-white/70 hover:bg-white/90 hover:border-primary-700 sm:whitespace-normal sm:text-base lg:text-sm"
      ) {{name}}
      .w-6(class="sm:hidden") &nbsp;
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export default defineComponent({
  setup() {
    const navigation = ref(null);

    const breakpoints = useBreakpoints(breakpointsTailwind);
    const largerThanSm = breakpoints.greater('sm');

    const desktopLinks = {
      top: 'Intro',
      about: 'About',
      work: 'Work Experiences',
      education: 'Education',
      skill: 'Skill',
      language: 'Languages',
      'side-project': 'Side Projects',
      interest: 'Interests',
    }
    
    const mobileLinks = {
      work: 'Work & Education',
      skill: 'Skills',
      'side-project': 'Side Projects',
      top: 'Top',
    }

    const links = computed(() => (largerThanSm.value) ? desktopLinks : mobileLinks)

    function smoothTransition(elementId: string) {
      const section = document.getElementById(elementId);
      if (section) {
        const navigationHeight = (navigation.value) ? (navigation.value as unknown as Element).getBoundingClientRect().height || 64 : 64;
        const elementPosition = section.getBoundingClientRect().top;

        window.scrollTo({
          top: elementPosition + window.pageYOffset - navigationHeight - 6,
          behavior: 'smooth'
        });

        window.history.pushState(null, '', `#${elementId}`);
      }
    }

    return {
      navigation,
      smoothTransition,
      links,
    }
  },
});
</script>

<style lang="scss">
// .navigation {}
</style>
