import { EntryTableProps } from './types';
import { EntryRow } from './Row';

export const EntryTable = ({ entries, onDelete, onEdit }: EntryTableProps): JSX.Element => {
  const containerClass = entries.length === 0 ? 'table-container inactive' : 'table-container';

  return (
    <div className={containerClass}>
      <table >
        <tbody>
          {entries.map((entry) => (
            <EntryRow key={entry.date} entry={entry} onDelete={onDelete} onEdit={onEdit} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
