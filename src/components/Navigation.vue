<template lang="pug">
.navigation.px-3.py-1.leading-relaxed.border-b(
  ref="navigation"
  class="sm:border border-black/10 bg-white/40 backdrop-blur-lg sm:rounded-br-xl sm:rounded-bl-xl"
)
  .flex.flex-wrap.items-center.-mx-1
    .inline.mr-1.text-sm.text-primary-900.w-full.px-1.mb-2.opacity-70.mt-2(class="sm:w-auto sm:mb-0 sm:mt-0") Jump to:
    a.px-3.py-1.m-1.rounded-full.text-sm.border.font-medium.text-gray-700(
      v-for="(name, link) in links"
      :href="`#${link}`"
      @click.prevent="smoothTransition(link)"
      class="border-gray-800/10 bg-white/70 hover:bg-white/90 hover:border-primary-700"
    ) {{name}}
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const navigation = ref(null);

    function smoothTransition(elementId: string) {
      const section = document.getElementById(elementId);
      if (section) {
        const navigationHeight = (navigation.value) ? (navigation.value as Element).getBoundingClientRect().height || 64 : 64;
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
      links: {
        top: 'Intro',
        about: 'About',
        work: 'Work Experiences',
        education: 'Education',
        skill: 'Skill',
        language: 'Languages',
        'side-project': 'Side Projects',
        interest: 'Interests',
      }
    }
  },
});
</script>

<style lang="scss">
// .navigation {}
</style>
