
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [todos, settodos]=useState([
    {id:1, title:"Learn React", status:false},
    {id:2, title:"Build a React app", status:false},
    {id:3, title:"Deploy the React app", status:false}
  ]);

  let id;
  function handleClick(){
    let task=[...todos];
    task.forEach((e,i) =>{
      if(e.id=== id)
      {
        task[i].status=true;
      }
    });
    settodos(task);
  }



  return (
    <div>
        {/* Do not remove the main div */}
        <div>
          <h1>Parent Component</h1>
          <ul>
            {
              todos.map(e =>{
                if(e.status=== true){
                  return <li>{e.title}</li>
                }
              })
            }
          </ul>
        </div>
        <div>
          <ul>
            <h1>Child Component</h1>
            {
              todos.map((e)=>{
                if(e.status === false){
                  return <li>{e.title}<button onClick={()=>{ id=e.id; handleClick()}}>Complete</button></li>
                }
              })
            }
          </ul>
        </div>

    </div>
  )
}

export default App
