//Função para adicionar tarefa
function addTask(task) {
    if (task) {
      let ul = document.querySelector("ul");
      let li = document.createElement("li");
      li.innerHTML = `<span><i class="fa fa-trash"></i></span> ${task}`;
      ul.appendChild(li);
      document.getElementById("addToDo").value = "";
    }
  }
  
  //Função para remover tarefa
  let list = document.querySelector("ul");
  list.addEventListener("click", function(event) {
    if (event.target.tagName === "I") {
      let li = event.target.parentElement.parentElement;
      list.removeChild(li);
    }
  });