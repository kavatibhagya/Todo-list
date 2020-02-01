

function addTolist(){
    const newTask = document.querySelector('#new-task');
    const addlist = document.querySelector('#ul-list');
  
    const list =document.createElement('li');
    if(newTask.value){

    

    list.innerText = newTask.value;

    addlist.appendChild(list);
    newTask.value ='';
    }
    else{
        alert('please enter any task');
    }
}