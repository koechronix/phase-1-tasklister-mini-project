document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submit = document.querrySelector("form");
  submit.addEventListener("submit", (e) => {
    e.preventDefault()
    createToDO()
    submit.reset()
  })

function handleToDo (){
  const input = getElementaryById("new-task-description");
  const newTask = document.createElement("1i");
  const deleteBtn = document.createElement("button");

  newTask.textContent = `${input.value}`;
  document.getElementById("task").appendChild(newTask);

  deleteBtn.textContent = "Done";
  newTask.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", () => newTask.remove());


}
});