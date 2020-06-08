<template>
  <div class="notes">
    <div class="notes__container row">
      
      <note v-for="(note, index) in list"
        class="notes__item sg-col-xs-12 sg-col-sm-6 sg-col-md-4 sg-col-lg-3" 
        :note="note" 
        :tabIndex="index"
        :key="note.Index" />

    </div>
    <div class="notes__actions">
      <button-blue @click="createNewNote">Создать заметку</button-blue>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  import note from './note/note.vue'

  import buttonBlue from '@/components/common/button/button-blue.vue'
  // import confirm from '@/components/common/confirm/confirm.vue'

  import { Note } from '@/types'

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import style from './style.scss'

  export default Vue.extend({
    name: 'notes',
    components: {
      note,
      buttonBlue,
      // confirm
    },
    props: {
      
    },
    data() {
        return {
            style: style
        }
    },
    methods: {
      createNewNote() {
        this.$router.push('/create/')
      }
    },
    computed: {
      list(): Note[] {
        return this.$store.getters.notesForDisplay;
      }
    }
  })
</script>