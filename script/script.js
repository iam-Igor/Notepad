let input = document.getElementById("toDoInput");

const mainUl = document.getElementById("main-ul");

const getInputValue = function () {
  const input = document.getElementById("toDoInput");

  if (input) {
    const values = input.value.split(",");

    values.forEach((element) => {
      const li = document.createElement("li");
      li.innerText = element.trim();
      mainUl.appendChild(li);
      input.value = "";
    });
  }
};

const removeItems = function () {
  mainUl.innerHTML = "";
};

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", getInputValue);

const removeButton = document.getElementById("recycle");
removeButton.addEventListener("click", removeItems);
