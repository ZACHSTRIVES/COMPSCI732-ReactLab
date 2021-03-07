
export default function TodoList({setinput,additem}){
    return(
        <div>
            <input type='text' id='descrption' onChange={(e)=>(setinput(e.target.value))}>
            </input>
            <button onClick={additem}>
                Add
            </button>
        </div>

    );
  
  }
  