import { useState } from 'react';

// A to-do list to use for testing purposes
const todos = [
  { description: 'Finish lecture', isComplete: true },
  { description: 'Do homework', isComplete: false },
  { description: 'Sleep', isComplete: true }
];

function App() {

  return (
    <div>
      <div>
        <h1>My todos</h1>
        
      </div>
      <div>
        <h1>Add item</h1>
        
      </div>

    </div>
  );
}

export default App;