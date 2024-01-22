const btn = document.querySelector('.btn-task')
const input = document.querySelector('.input-task')
const myAllList = document.querySelector('.list-tasks')
let myLists = []

function addTask() {
    myLists.push(

        {
            task: input.value,
            taskDone: false
        }
    )
    input.value = ''
    showTasks()
}

function showTasks() {
    let newList = []
    myLists.forEach((list, position) => {
        newList = newList + `

        <li class="task ${list.taskDone && "done"}">
        <img src="img/success-check-icon.svg" alt="sucess-icon" onclick='taskdone(${position})'>  
        <P>${list.task}</P>
        <img src="img/warning.svg" alt="warning-icon" onclick='deletarItem(${position})'>
        </li>

        `
    })
    myAllList.innerHTML = newList
    localStorage.setItem('lists', JSON.stringify(myLists))

}
function charginTask() {
    const saveLocalStorege = localStorage.getItem('lists')
    if (saveLocalStorege) {
        myLists = JSON.parse(saveLocalStorege)
    }


    showTasks()
}
charginTask()

function taskdone(position) {
    myLists[position].taskDone = !myLists[position].taskDone
    showTasks()
}

function deletarItem(position) {
    myLists.splice(position, 1)

    showTasks()
}
// 
btn.addEventListener('click', addTask)