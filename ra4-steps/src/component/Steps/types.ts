export type Entry = {
  date: string; // формат: "ДД.ММ.ГГГГ"
  distance: number;
};

export type EntryFormProps = {
  onAdd: (entry: Entry) => void;
  onEdit: (entry: Entry) => void;
  editableEntry?: Entry | null;
};

export type EntryTableProps = {
  entries: Entry[];
  onDelete: (date: string) => void;
  onEdit: (entry: Entry) => void;
};

export type EntryRowProps = {
  entry: Entry;
  onDelete: (date: string) => void;
  onEdit: (entry: Entry) => void;
};
