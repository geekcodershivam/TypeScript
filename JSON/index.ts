import axios from 'axios';

// object
interface Todo{
  id:number,
  title:string,
  completed:boolean
}

const url='https://jsonplaceholder.typicode.com/todos/1'
axios.get(url)
.then((response)=>{
    const todo=response.data as Todo;
    logTodo(todo.id,todo.title,todo.completed)
})

const logTodo=(id:number,title:string,completed:boolean)=>{
  console.log(`
    ${id}
    ${title}
    ${completed}
    `);
}