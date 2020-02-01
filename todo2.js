

function addTolist(){
    const newTask = document.querySelector('#new-task');
    const addlist = document.querySelector('#ul-list');
  
    const list =document.createElement('li');
    list.innerText = newTask.value;
    addlist.appendChild(list);
    newTask.value ='';
}