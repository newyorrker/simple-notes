import { Note } from '@/types/index'

export class LocalStorageClient {

  constructor() {
    this.storage = window.localStorage;
  }

  private NOTE_LIST_STORAGE_KEY = 'notes_list'
  private storage?: Storage;

  /**
   * Сохранение данных в localStorage
   * @param notes Список заметок
   */
  public SaveNotes(notes: Note[]) {
    this.storage?.setItem(this.NOTE_LIST_STORAGE_KEY, this.Stringify(notes))
  }

  /**
   * Получение списка заметок из localStorage
   */
  public GetNotes(): Note[] {
    return this.JsonParse(this.storage?.getItem(this.NOTE_LIST_STORAGE_KEY) || '[]' ) as Note[]
  }

  private Stringify(data: object): string {
    return JSON.stringify(data)
  }

  private JsonParse(data: string): object {
    return JSON.parse(data);
  }
}