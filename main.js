import './style.css'
import { getTasks, addtask, editDocument } from './firebase'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from './firebase'

let tasks=[]
await renderTasks()

const buttontask=document.getElementById("button-todo")

tasks= await getTasks()
buttontask.addEventListener("click",async()=> await handleClick())


async function renderTasks(){

  tasks= await getTasks()
  const todoscontainer =document.querySelector("#to-dos-container")


  todoscontainer.innerHTML=""
  tasks.forEach(task => {
    const elem= document.createElement("li")
    elem.textContent= task.name

    elem.addEventListener("click", ()=> {
      deleteDoc(doc(db, "tasks", task.id))
      renderTasks();
    })
     if(task.completed) elem.style.textDecoration="line.through";

    todoscontainer.append(elem)
    
  });
}

async function handleClick(){
  const inputTask =document.getElementById("input-todo")
  const inputText= inputTask.value

  await addtask(inputText)
  inputTask.value=""
  await renderTasks()
}

function completeTask(id){

}