const form = document.querySelector("form");

// Local storage
function storeList() {
  window.localStorage.todoList = list.innerHTML;
}

function getTodos() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquez sur un truc pour le supprimer</li>`;
  }
}

window.addEventListener("load", getTodos);

// Ajouter un élément a la liste
form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storeList();
});

//Supprimer un élément de la liste
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});

// Animation

window.addEventListener("load", () => {
  liste.style.opacity = 1;
  liste.style.letterSpacing = "6px";
});
window.addEventListener("load", () => {
  parda.style.opacity = 1;
});
