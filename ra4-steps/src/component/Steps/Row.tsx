import { EntryRowProps, formatDate } from './types';

export const EntryRow = ({ entry, onDelete, onEdit }: EntryRowProps): JSX.Element => {

  return (
    <tr className="row">
      <td>{formatDate(entry.date)}</td>
      <td>{entry.distance}</td>
      <td className='action-buttons'>
        <button onClick={() => onEdit(entry)}>✎</button>
        <button onClick={() => onDelete(entry.date)}>✘</button>
      </td>
    </tr>
  );
};
