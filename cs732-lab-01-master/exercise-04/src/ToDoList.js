
export default function TodoList({todos,onTodoStatusChanged,removeitem}){
    if(todos.length===0){
      return <p> There are no to-do items! </p>
  
    }else{
      return todos.map((todo,index)=>(
          <div>
          <div className={todo.isComplete?"complete":"not_complete"}>

              <input type="checkbox" 
              checked={todo.isComplete}
              onChange={e=>onTodoStatusChanged(index,e.target.checked)}
              ></input>
              {todo.description}
              <span>{todo.isComplete?' (Done!)':''}</span>
              <button className="end" onClick={e=>removeitem(index)}>Remove</button>
        
          </div>
          </div>

      )
      )
       
     
    }
  
  }
  