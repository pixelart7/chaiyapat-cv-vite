<template lang="pug">
.app.px-2.py-2
  .mx-auto.w-full(style="max-width: 1104px;")
    Intro
    .mt-2
      .block.space-y-2(class="sm:hidden")
        Skill
        Work
        Education
        Language
        Interest
        SideProject
      .grid-cols-2.gap-2.space-y-2.hidden(class="sm:grid sm:space-y-0")
        .space-y-2
          Skill
          Work
          SideProject
        .space-y-2
          Education
          Language
          Interest
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Intro from './components/Intro.vue';
import Skill from './components/Skill.vue';
import Work from './components/Work.vue';
import SideProject from './components/SideProject.vue';
import Education from './components/Education.vue';
import Language from './components/Language.vue';
import Interest from './components/Interest.vue';
const components = { Intro, Skill, Work, SideProject, Education, Language, Interest };

export default defineComponent({
  components,
  // setup() {},
});
</script>

<style lang="scss">
// .app {}
</style>
