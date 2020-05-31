<template>
  <div class="main">
    <h1>List of notes</h1>
    <notes />
  </div>
</template>

<script lang="ts">

import notes from '@/components/notes/notes.vue'

export default {
  name: 'Home',
  components: {
    notes
  }
}
</script>
