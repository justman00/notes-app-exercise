import React, { useEffect, useState } from 'react';
import { getAllNotes, deleteNote, editNote } from './api';

function App() {
  return (
    <div className="App">
      <header className="App-container">
        <div>
          Bine ati venit la <strong>StepIt Notes</strong>
        </div>
      </header>
    </div>
  );
}

export default App;
