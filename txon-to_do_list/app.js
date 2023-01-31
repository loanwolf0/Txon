const inputEl = document.getElementById("text-input");
const addEl = document.querySelector(".add");
const selectEl = document.querySelector(".select");
const todoEl = document.querySelector(".todos-container");

let isEditable = true;

addEl.addEventListener("click", () => {
  if (inputEl.value.trim().length == "") {
    return;
  } else {
    let text = inputEl.value;

    console.log(text);

    const todoCon = document.createElement("ul");
    todoCon.classList.add("todo-container");
    todoCon.classList.add("inCompleted");
    todoEl.appendChild(todoCon);

    // text add

    const tP = document.createElement("p");
    tP.id = "text";
    tP.innerText = inputEl.value;
    todoCon.appendChild(tP);

    // add edit

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-button");
    todoCon.appendChild(editBtn);

    // for delete
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("edit-button");
    todoCon.appendChild(deleteBtn);

    // edit tag for svg

    const editSvg = document.createElement("i");
    editSvg.classList.add("fa");
    editSvg.classList.add("fa-edit");
    editBtn.appendChild(editSvg);

    // delete tag for svg
    const deleteSvg = document.createElement("i");
    deleteSvg.classList.add("fa");
    deleteSvg.classList.add("fa-trash");
    deleteBtn.appendChild(deleteSvg);

    // for duble click
    tP.addEventListener("dblclick", () => {
      if (isEditable) {
        isEditable = false;
        console.log("clicked dblclick");
        localStorage.setItem("edit", JSON.stringify(isEditable));
        tP.className = "completed";
        todoCon.className = todoCon.className.replace("inCompleted", "Completed");
        editBtn.setAttribute("disabled", "disabled");
        console.log(todoCon.className);
      } else {
        isEditable = true;
        localStorage.setItem("edit", JSON.stringify(isEditable));
        tP.className = tP.className.replace("completed", "inCopleted");
        // todoCon.classList.remove('Completed')
        todoCon.className = todoCon.className.replace("Completed", "inCompleted");
        editBtn.removeAttribute("disabled", "disabled");
        console.log(todoCon.className);

      }
    });

    // for edit btn click
    editBtn.addEventListener("click", () => {
      inputEl.value = tP.innerText;
      const parent = editBtn.parentElement;
      parent.parentElement.removeChild(parent);
    });

    // for delete btn click
    deleteBtn.addEventListener("click", () => {
      const parent = deleteBtn.parentElement;
      parent.classList.add("slide");
      tP.classList.add('slide-text');

      parent.addEventListener("transitionend", () => {
        parent.parentElement.removeChild(parent);
      });
    });


    // for select options ( Filter )

    selectEl.addEventListener('change', (e)=>{
      const todos = todoEl.childElementCount;
      console.log(todos);

      



      todos.forEach( (todo) => {
        switch (e.target.value) {
          case 'all':
            todo.style.display='flex';
            break;
          case 'completed':
            if(todo.classList.contains('Completed')){
              todo.style.display='flex';
              console.log(todo);

            }else{
              todo.style.display='flex';

            }
            break;
          case 'inCompleted':
            if(!todo.classList.contains('Completed')){
              todo.style.display='flex';
              console.log(todo);


            }else{
              todo.style.display='none';

            }
            break;
        
          default :
            break;
        }
      })
    })

    inputEl.value = "";
  }
});
