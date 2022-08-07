function popup(){
    const popup =document.querySelector('#popup-container');
    popup.classList.toggle('active')
}

const task_info = document.getElementsByClassName('task-info');
const taskStatus = document.getElementsByClassName('status');

let drggableTask =null;

task_info.forEach((item)=>{
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);

});

function dragStart(){
    drggableTask = this;

}

function dragEnd(){
    drggableTask = null;

}

taskStatus.forEach(function(stat){
    stat.addEventListener('dragover', dragOver);
    stat.addEventListener('dragenter', dragEnter);
    stat.addEventListener('dragleave', dragLeave);
    stat.addEventListener('drop', dragDrop);
});

function dragOver(event){
    event.preventDefault();

}

function dragLeave(){

}
function dragLeave(){

}
function dragDrop(){
    this.appendChild(drggableTask);

}