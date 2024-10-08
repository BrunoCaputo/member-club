import { searchUserById } from "../../services/search-user.js";
import { showUserData } from "./show-user.js";
import { invalidUser, validUser } from "../../utils/main-container.js";

const form = document.querySelector("form");
const idField = document.getElementById("card-id");
const searchButton = document.querySelector(".input-container button");

idField.addEventListener("input", function (event) {
  if (event.target.value !== "") {
    searchButton.disabled = false;
  } else {
    searchButton.disabled = true;
  }
});

form.onsubmit = async function (event) {
  event.preventDefault();

  try {
    const userId = idField.value;

    const user = await searchUserById({ userId });

    showUserData({ userData: user });
    validUser();
    idField.value = "";
  } catch (error) {
    console.error(error);
    invalidUser();
    alert("ID inválido! Tente novamente.");
  }
};
