import { useState } from 'react';
import TodoList from './ToDoList';
import NewTodoItem from './NewTodoItem';
import './index.css'

// A to-do list to use for testing purposes
const initialTodos = [
  { description: 'Finish lecture', isComplete: true },
  { description: 'Do homework', isComplete: false },
  { description: 'Sleep', isComplete: true }
];
const initialInput="";

function App() {
  const [todos,setTodos]=useState(initialTodos);
  const [input_value,setInput]=useState(initialInput);
  function handleEvent(index,isComplete){
    const newtodos=[...todos];
    newtodos[index].isComplete=isComplete;
    setTodos(newtodos);
  };
  function inputing(description){
    setInput(description)
    console.log(description)
  };
  function additem(){
    const newitem={description:input_value,isComplete:false};
    const newtodos=[...todos];
    newtodos.push(newitem);
    setTodos(newtodos)

  };
  function remove(index){
    const newtodos=[...todos];
    newtodos.pop(index)
    setTodos(newtodos)

  };

  return (
    <div className="bg" >
      <div>
        <h1>My todos</h1>
        <div className='list'>
        <TodoList todos={todos} onTodoStatusChanged={handleEvent} removeitem={remove}></TodoList>
      </div>
        
      </div>
      <h2>Add item</h2>
      <NewTodoItem  setinput={inputing}  additem={additem}></NewTodoItem>
      

    </div>
  );
}



export default App;