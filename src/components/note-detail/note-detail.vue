<template>
  <div class="note-detail">
    
    <template v-if="!isNaN(noteId) || $route.name === 'Create'">
      <!-- редактирование текста заметки -->
      <div class="note-detail__text">
        <p @click="headerClick" v-if="!editText"> {{ headerText }} </p>
        <textarea v-show="editText" v-model="headerText" @blur="editText = false" ref="textArea"></textarea>
      </div>
      
      <!-- список todo -->
      <todo-list-container @add="addTodo" class="note-detail__todos" :list="currentNote.Todos" />

      <!-- действия -->
      <div class="note-detail__actions">
        
        <!-- сохранить -->
        <button-blue @click="saveNote" :disabled="!savePermited">Сохранить</button-blue>
        
        <!-- отменить -->
        <button type="button" class="note-detail__discard" @click="showDiscardConfirm = true" :disabled="!savePermited">Отменить</button>
        
        <!-- удалить -->
        <button type="button" class="note-detail__delete" @click="showDeleteConfirm = true">Удалить</button>
        
        <!-- отменить внесенное изменение -->
        <button @click="undo" 
          class="note-detail__undo" 
          title="отменить" type="button" 
          :disabled="!canUndo">отменить внесенное изменение</button>
        
        <!-- повторить внесенное изменение -->
        <button @click="redo" 
          class="note-detail__redo" 
          title="повторить" type="button" 
          :disabled="!canRedo">повторить отмененное изменение</button>

      </div>
    </template>

    <template v-else>
      Ошибка!
    </template>

    <confirm v-if="showDiscardConfirm" 
      @confirm="discard" 
      @cancel="showDiscardConfirm = false"
      :tabIndex="0"
      :width="confirmWidth">
        Вы действительно хотите отменить изменения?
    </confirm>

    <confirm v-if="showDeleteConfirm" 
      @confirm="(dataService.DeleteNote(note), $router.push('/'))" 
      @cancel="showDeleteConfirm = false"
      :tabIndex="0"
      :width="confirmWidth">
        Вы действительно хотите удалить заметку?
    </confirm>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  import todoListContainer from './todo-list-container/todo-list-container.vue'
  import confirm from '@/components/common/confirm/confirm.vue'
  import buttonBlue from '@/components/common/button/button-blue.vue'
  import style from './style.scss'

  import { NoteDataService } from '@/data/NoteDataService/NoteDataService'

  import { Note, Todo } from '@/types'
  import { MutationPayload } from 'vuex'

  import { isEqual, cloneDeep } from "lodash";

  const emptyTodo = {
    Id: 0,
    Text: 'Введите текст',
    Checked: false,
    Disabled: false,
    Removed: false
  } as Todo;

  const emptyNote: Note = {
    Id: -1,
    Index: -1,
    Header: 'Введите название',
    Todos: [emptyTodo]
  };

  export default Vue.extend({
  name: 'note-detail',
    components: {
      todoListContainer,
      confirm,
      buttonBlue
    },
    props: {
      id: String
    },
    data() {
      return {
        currentNote: {} as Note,
        originNote: {} as Note,
        editText: false,
        savePermited: false,
        confirmToRight: false,
        confirmWidth: 220,
        showDiscardConfirm: false,
        showDeleteConfirm: false,
        history: {
          done: [] as MutationPayload[],
          undone: [] as MutationPayload[],
          newMutation: true
        },
        dataService: {} as NoteDataService,
        style: style,
      }
    },
    created() {

      if(this.$route.name === 'Create') this.$store.dispatch('addNote', emptyNote);

      //обработка мутаций для сохранения промежуточных состояний
      this.$store.subscribe((mutation) => {
        if (mutation.type !== 'setOriginNote') {
          this.history.done.push(mutation);
        }
        if (this.history.newMutation) {
          this.history.undone = [];
        }
      });
    },
    mounted() {

      this.dataService = new NoteDataService(this.$store);
      
      //клонируем заметку для редактирования
      this.currentNote = cloneDeep(this.note);

      //сохраняем исходное состояние заметки для отмены изменений
      this.originNote = cloneDeep(this.note);
    },
    beforeDestroy() {
      this.$store.dispatch('clearNotes');
    },
    methods: {
      /**
       * Обработка отмены
       */
      discard() {
        this.showDiscardConfirm = false;
        this.currentNote = this.originNote;
      },
      /**
       * Обработка добавления todo
       */
      addTodo() {
        const newTodo = {...emptyTodo};
        const todoLength = this.currentNote.Todos.length;

        if(this.currentNote.Todos && todoLength > 0) {
          const lastTodo = this.currentNote.Todos[todoLength - 1];
          newTodo.Id = lastTodo.Id + 1;
        }
        else {
          newTodo.Id = 0;
        }

        //создаем пустой список если Todos undefined или null
        if(!this.currentNote.Todos) {
          this.currentNote.Todos = [];
        }
        
        this.currentNote.Todos.push(newTodo);
      },
      /**
       * Обработка сохранения заметки
       */
      saveNote(): void {        
        
        if(this.$route.name === 'Create') {
          
          this.dataService.CreateNote(this.currentNote);
          
          //переход к списку
          this.$router.push('/');

        } else {
          this.dataService.UpdateNote(this.currentNote);
          //клонируем сохраненную заметку или заготовку
          this.currentNote = cloneDeep(this.note);
        }
        
      },
      /**
       * Обработка клика на заголовок заметки
       */
      headerClick() {
        
        this.editText = true;

        this.$nextTick(() => {
          const textArea = this.$refs.textArea as HTMLElement;
          textArea.focus()
        });
      },
      /**
       * Откат сохранения
       */
      undo() {
        const last = this.history.done.pop();

        if(last) this.history.undone.push(last)

        this.history.newMutation = false;
        
        this.$store.dispatch('setOriginNote', this.originNote);

        this.history.done.forEach(mutation => {
          this.$store.commit(`${mutation.type}`, mutation.payload);
          this.history.done.pop();
        });

        this.history.newMutation = true;

        this.currentNote = cloneDeep(this.note);
      },
      /**
       * Отмена отката
       */
      redo() {
        const commit = this.history.undone.pop();
        this.history.newMutation = false;

        if(commit) {
          this.$store.commit(`${commit.type}`, commit.payload);
          this.history.newMutation = true;
        }
        this.currentNote = cloneDeep(this.note);
      },
    },
    watch: {
      currentNote: {
        /*отслеживаем изменение в текущей заметке 
          что-бы определить есть ли изменения*/
        handler(val) {
          this.savePermited = !isEqual(val, this.note)
        },
        deep: true
      }
    },
    computed: {
      /**
       * Текст заголовка заметки
       */
      headerText: {
        set(val: string) {
          if(this.currentNote) {
            this.currentNote.Header = val;
          }
        },
        get(): string {
          return this.currentNote.Header || ''
        }
      },
      /**
       * Возможность повтора
       */
      canRedo(): boolean {
        return this.history.undone.length > 0;
      },
      /**
       * Возможность отмены
       */
      canUndo(): boolean {
        return this.history.done.length > 0;
      },
      /**
       * Заметка из стора
       */
      note(): Note {
        return this.$store.getters.note(this.noteId) || {};
      },
      /**
       * Обертка над id заметки
       */
      noteId(): number {
        return this.$route.name === 'Create' ? -1 : parseInt(this.id);
      }
    }
  })
</script>