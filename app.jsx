const [Tasks, setTasks] = userState(JSON.parse(localStorage.getItem("yourTasks"))|| []);

const newTask =(name) => {
  setTaks([...Tasks, {id: Math.random(), nameTask: name, done: false}]);
}

const checked = (id) => {
  const changedDone = ((info)=> { 
    if(info.id == id){
      return {...info, done: !info.done};
    }
    return info;

  })
  setTasks(changedDone);
}

const [value, setvalue] = userState("one"); 
const handleChange = (e, newEvent) => {
  setvalue(newEvent);
}


const removeTask = (id) =>{
  setTasks(Tasks.filter((info) => !info.done));
}

useEffect(() =>
{
  localStorage.setItem("your Tasks", JSON.stringify(Tasksaks));
}, [Tasks]
)
