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
      li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
      });
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

const tips = document.getElementById("tips");

tips.addEventListener("click", function () {
  const newH2Tips = document.createElement("div");
  newH2Tips.classList.add("tipsText");

  newH2Tips.innerText =
    "Write something and click on the + button. To mark something as done, simply click on an element in the list. Remove items by clicking on the bottom right X.";
  newH2Tips.style.fontFamily = "Outfit";
  tips.appendChild(newH2Tips);
});

tips.addEventListener("dblclick", function () {
  tips.style.display = "none";
});
