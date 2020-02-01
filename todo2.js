const newTask = document.querySelector('.new-task');
const addlist = document.querySelector('.ul-list');
  

function addTolist(){
    const list =document.createElement('li');
    list.innerText = newTask.Value;
    addlist.appendChild(list);
}