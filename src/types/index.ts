export interface ListItem {
  Id: number;
  Index?: number;
  Removed?: boolean;
}

export interface Note extends ListItem  {
  Header?: string;
  Todos: Todo[];
}

export interface Todo extends ListItem {
  Text: string;
  Checked: boolean;
  Disabled?: boolean;
}

export interface RootStateNotes {
  notes: Note[];
}