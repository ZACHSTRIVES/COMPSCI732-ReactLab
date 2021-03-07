
// A to-do list to use for testing purposes
const todos = [
  'Finish lecture',
  'Do homework',
  'Sleep'
];


// To test functionality with a nonexistant or empty todo list, comment out the list
// above, and uncomment one of the following options:
// const todos = null;
// const todos = undefined;
// const todos = [];

function App() {
  return (
    <div>
      <h1>My todos</h1>
      <ul>{TodoList()}</ul>

    </div>
  );
}



function TodoList(){
  if(todos.length===0){
    return <p> There are no to-do items! </p>

  }else{
    const todo_list=todos.map((todo)=><li>{todo}</li>)
    return todo_list

  }

}


export default App;