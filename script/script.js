let input = document.getElementById("toDoInput");

const mainUl = document.getElementById("main-ul");

const getInputValue = function () {
  const input = document.getElementById("toDoInput");

  if (input) {
    const values = input.value.split(",");

    values.forEach((element) => {
      const li = document.createElement("li");
      li.innerText = element.trim();
      const deleteButton = document.createElement("button");

      deleteButton.innerText = "delete";
      deleteButton.classList.add("delete-btn");
      mainUl.appendChild(li);
      li.appendChild(deleteButton);
      input.value = "";
      deleteButton.addEventListener("click", function () {
        li.remove();
      });
    });
  }
};

const removeItems = function () {
  if (confirm("Are you sure you want to delete all notes?")) {
    mainUl.innerHTML = "";
  }
};

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", getInputValue);

const removeButton = document.getElementById("recycle");
removeButton.addEventListener("click", removeItems);

const tips = document.getElementById("tips");
const innermain = document.getElementById("innertextes");

tips.addEventListener("click", function () {
  const newH2Tips = document.createElement("div");
  newH2Tips.classList.add("tipsText");

  newH2Tips.innerText =
    "Write something and click on the + button. To mark something as done, simply click on an element in the list. Remove items by clicking on the bottom right X. Click to close the window.";
  newH2Tips.style.fontFamily = "Outfit";
  tips.appendChild(newH2Tips);

  newH2Tips.addEventListener("click", function () {
    location.reload();
  });
});

const saveButton = document.getElementById("save");

const downloadFile = () => {
  const link = document.createElement("a");
  const content = document.getElementById("main-ul").textContent;
  const file = new Blob([content], { type: "text/plain" });
  link.href = URL.createObjectURL(file);
  link.download = "sample.txt";
  link.click();
  URL.revokeObjectURL(link.href);
};

saveButton.addEventListener("click", downloadFile);
