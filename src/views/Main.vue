<template>
  <div class="main">
    <h1>Список заметок</h1>
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
