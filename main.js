// ex2_5; //
// function emptyValue(ev) {
//   ev.preventDefault();
//   let userInput = document.getElementById("value").value;
//   // userInput = "Bob" => truthy
//   // !(truthy) => falsy

//   // userInput = "" = > falsy
//   // !(falsy) => truthy
//   if (!userInput) {
//     // or we could use:  if (userInput === "") {
//     // but the first option covers more cases
//     // console.log("error");
//     document.getElementById("error-message").innerText =
//       "You need to fill this field";
//   }
// }

//ex2_7//

function MakeMyList() {
  const userText = document.getElementById("user-input");
  const addBtn = document.getElementById("add-btn");
  const removeBtn = document.getElementById("remove-btn");
  const theBigList = document.getElementById("todo-list");
  addBtn.addEventListener("click", () => {
    // const text = document.createTextNode(userText.value);
    // newTodo.appendChild(text);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // or:
    // checkbox.setAttribute("type", "checkbox");
    const newTodo = document.createElement("li");
    newTodo.innerHTML = userText.value;
    newTodo.appendChild(checkbox);
    theBigList.appendChild(newTodo);
  });
  removeBtn.addEventListener("click", () => {
    const lastChild = theBigList.lastChild;
    theBigList.removeChild(lastChild);
  });
  theBigList.style.checkbox;
}

MakeMyList();
