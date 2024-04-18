import { useState, useEffect, useRef } from 'react';
import { Entry, EntryFormProps } from './types';

export const EntryForm = ({ onAdd, onEdit, editableEntry }: EntryFormProps): JSX.Element => {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(true);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const distanceInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editableEntry) {
      setDate(editableEntry.date);
      setDistance(editableEntry.distance.toString());
      distanceInputRef.current?.focus();
    } else {
      if (!formSubmitted) {
        setDate('');
        setDistance('');
      }
    }
  }, [editableEntry, formSubmitted]);

  useEffect(() => {
    if (formSubmitted) {
      dateInputRef.current?.focus();
      setFormSubmitted(false);
    }
  }, [formSubmitted]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const entry: Entry = { date, distance: Number(distance) };

    if (editableEntry) {
      onEdit(entry);
    } else {
      onAdd(entry);
    }

    setFormSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <div className="input-group">
        <label htmlFor="dateInput">Дата (ДД.ММ.ГГГГ)</label>
        <input
          type="date"
          id="dateInput"
          ref={dateInputRef}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          readOnly={editableEntry !== null}
        />
      </div>
      
      <div className="input-group">
        <label htmlFor="distanceInput">Пройдено км</label>
        <input
          type="number"
          id="distanceInput"
          ref={distanceInputRef}
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          placeholder="Пройдено км"
          required
        />
      </div>
      <div className="input-group">
        <button type="submit" id="submit-button" className="submit-button">OK</button>
      </div>
    </form>
  );
};
