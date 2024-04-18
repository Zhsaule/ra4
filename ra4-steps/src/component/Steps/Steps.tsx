import { useState } from 'react';
import { EntryForm } from './Form';
import { EntryTable } from './Table';
import { Entry } from './types';
import './steps.css';

const Steps = (): JSX.Element => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [editableEntry, setEditableEntry] = useState<Entry | null>(null);

  const startEditing = (entry: Entry) => {
    setEditableEntry(entry);
  };

  const stopEditing = () => {
    setEditableEntry(null);
  };

  const addEntry = (newEntry: Entry) => {
    setEntries((prevEntries) => {
      const existingEntryIndex = prevEntries.findIndex(entry => entry.date === newEntry.date);
      if (existingEntryIndex >= 0) {
        const updatedEntries = [...prevEntries];
        updatedEntries[existingEntryIndex] = {
          ...updatedEntries[existingEntryIndex],
          distance: updatedEntries[existingEntryIndex].distance + newEntry.distance
        };
        return updatedEntries;
      } else {
        const updatedEntries = prevEntries.concat(newEntry);
        updatedEntries.sort((a, b) => a.date.localeCompare(b.date));
        return updatedEntries;
      }
    });
  };

  const deleteEntry = (date: string) => {
    setEntries((prevEntries) => prevEntries.filter(entry => entry.date !== date));
  };

  const editEntry = (editedEntry: Entry) => {
    setEntries((prevEntries) => {
      const updatedEntries = prevEntries.map(entry => {
        if (entry.date === editedEntry.date) {
          return { ...entry, ...editedEntry };
        }
        return entry;
      });
      return updatedEntries;
    });
    stopEditing();
  };

  return (
    <div className='container'>
      <EntryForm 
        onAdd={addEntry} 
        onEdit={editEntry} 
        editableEntry={editableEntry} />
      <EntryTable 
        entries={entries} 
        onDelete={deleteEntry} 
        onEdit={startEditing} />
    </div>
  );
};

export default Steps;
