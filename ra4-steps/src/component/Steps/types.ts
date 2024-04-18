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

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() возвращает месяц от 0 до 11
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
