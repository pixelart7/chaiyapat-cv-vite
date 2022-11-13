<template lang="pug">
.spacer.-mx-6(class="print:mx-0")
  hr.border-gray-300(class="print:border-gray-500 print:mt-4 print:mb-2" :class="{'mt-4 mb-2': forHeading, 'mt-6 mb-4': !forHeading, 'print:opacity-0 print:mt-1 print:mb-2': hideOnPrint}")
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    forHeading: {
      type: Boolean,
    },
    hideOnPrint: {
      type: Boolean,
    }
  }
  // setup() {},
});
</script>

<style lang="scss">
// .spacer {}
</style>
