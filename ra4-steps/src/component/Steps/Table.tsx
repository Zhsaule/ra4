import { EntryTableProps } from './types';
import { EntryRow } from './Row';

export const EntryTable = ({ entries, onDelete, onEdit }: EntryTableProps): JSX.Element => {
  return (
    <div className='table'>
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
