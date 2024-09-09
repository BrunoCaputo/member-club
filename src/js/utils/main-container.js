const noUserContainer = document.querySelector("main.no-user");
const noUserText = document.getElementById("no-user-text");
const userDataContainer = document.querySelector("main.existing-user");

export function invalidUser() {
  noUserText.textContent = "ID inválido!";
  noUserContainer.style.display = "flex";
  userDataContainer.style.display = "none";
}

export function validUser() {
  noUserContainer.style.display = "none";
  userDataContainer.style.display = "grid";
}
