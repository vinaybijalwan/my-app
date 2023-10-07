import { useState } from "react";
import "./ToDo_New.css";

const ToDo_New = () => {

    const [todo, setTodo] = useState("");
    const[toDoList, setTodoList] = useState([])

    const addToDo = () => {
        console.log("This is Add item")
        setTodoList([...toDoList, todo])
        setTodo('')
        
    }
  return (
    <div className='App>'>
        <h1>React To Do App</h1>
        <div className='input-Wrapper'>
            <input type="text" name="todo" placehoder="Enter a New ToDo"
            value={todo}
            onChange={(e) => {setTodo(e.target.value)}}
            />
            <button className='add-button' onClick={addToDo}>Add Item</button>
        </div>
        <div className="todolist">
            {
                toDoList.map((CurElm) => {
                    return  
                    <span>
                        <h1>{toDoList}</h1>
                    </span>  
                        
              } 

                )
            }
        </div>
    </div>
  )
}

export default ToDo_New