import { Store } from 'vuex';
import { LocalStorageClient } from '@/data/LocalStorageClient/LocalStorageClient'

import { Note, RootStateNotes } from '@/types/index'
 
export class NoteDataService {
  
  constructor(store: Store<RootStateNotes>) {
    this.$store = store;
    this.localStorageClient = new LocalStorageClient();
  }

  private $store: Store<RootStateNotes>;
  private localStorageClient: LocalStorageClient;
  
  /**
   * Создаёт и сохраняет новую заметку 
   * @param newNote Экземпляр новой заметки
   */
  public CreateNote(newNote: Note) {
    const notes = this.$store.state.notes
    const quantity = notes.length;

    this.$store.dispatch('updateNote', newNote)

    //инкрементим Id
    if(quantity === 1) {
      newNote.Id = 0
    }
    else if(quantity > 1) {
      newNote.Id = notes[quantity - 2].Id + 1
    }

    this.localStorageClient.SaveNotes(this.$store.state.notes.filter((item) => item.Id >= 0))
  }
  /**
   * Обновление заметки
   * @param note Экземпляр обновляемой заметки
   */
  public UpdateNote(note: Note): void {
    this.$store.dispatch('updateNote', note);
    this.localStorageClient.SaveNotes(this.$store.state.notes);
  }

  /**
   * Удаление заметки
   * @param note Экзепляр заметки для удаления
   */
  public DeleteNote(note: Note): void {
    this.$store.dispatch('deleteNote', note.Id)
    this.localStorageClient.SaveNotes(this.$store.state.notes);
  }
  
  /**
   * Получение списка заметок
   */
  public GetNotes() {
    
    const notes = this.localStorageClient.GetNotes();

    this.$store.dispatch('loadNotes', notes);
  }

}