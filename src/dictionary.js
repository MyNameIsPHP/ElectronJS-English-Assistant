dictionarySelected = document.getElementById("dictionary_input_icon-category");
dictionaryEraseBtn = document.getElementById("dictionary_input_icon-erase");
dictionarySelectionList = document.querySelector(".dictionary_category");
inputForm = document.querySelector(".form_input");
dictionaryOptions = document.querySelectorAll(".search_mode");

outsideArea = document.querySelector(".page[data-page='2");

dictionarySelected.addEventListener("click", () => {
  if (dictionarySelectionList.style.visibility == "visible") {
    dictionarySelectionList.style.visibility = "hidden";
  } else {
    dictionarySelectionList.style.visibility = "visible";
  }
});

document.addEventListener("click", function (event) {
  var isClickInsideElement = dictionarySelected.contains(event.target);
  if (!isClickInsideElement) {
    dictionarySelectionList.style.visibility = "hidden";
  }
});

dictionaryEraseBtn.addEventListener("click", () => {
  inputForm.value = "";
});

dictionaryOptions.forEach((option) => {
  option.addEventListener("click", () => {
    dictionarySelected.innerHTML =
      option.innerHTML + ` <ion-icon name="caret-down-outline"></ion-icon>`;
  });
});
