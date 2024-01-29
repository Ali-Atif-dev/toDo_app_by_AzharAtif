

const CardList = ({tasks,handleDelete}) => {
  return (
    <div>


{tasks.map((task,index)=>{


return(


<li key={index}>

 <span>{task.id}  -  {task.name}</span>  
 <button onClick={()=>{handleDelete(task.id)}}>Delete</button> 
</li>

)


})}



    </div>
  )
}

export default CardList