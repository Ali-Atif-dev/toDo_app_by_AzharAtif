import React from 'react';
import { useState } from 'react';
import CardList from './CardList';
const TaskList = () => {



    const [tasks, settasks] = useState([
        {id:124,name:"atif",completed:true},
        {id:1424,name:"azhar",completed:true},
        {id:647,name:"asim",completed:true}
    
    
    
    ])
    
    function handleDelete(id){
    
    
    settasks(tasks.filter(task=>task.id !== id));
    
    
    }

  return (
    <div>




<h1>Task todo list</h1>
<ul>

   <CardList tasks={tasks} handleDelete={handleDelete}/>

</ul>



    </div>
  )
}

export default TaskList;