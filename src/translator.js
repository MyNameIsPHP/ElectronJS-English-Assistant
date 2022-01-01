const translate = require("@vitalets/google-translate-api");
const gramma = require("gramma");

var grammarCorrectBtn = document.getElementById("translator_gcb");
var grammarCorrectExtend = document.querySelector(".translator_bar-right");
var grammarCorrectExtendBtn = document.getElementById("translator_gcb_extend");
var grammarCorrectExtendPanel = document.getElementById(
  "translation_grammar_correction_panel"
);
grammarCorrectExtendPanel.style.top = window.innerHeight * 0.2 + "px";
grammarCorrectExtendPanel.style.left = 0.6 * window.innerWidth + "px";
var grammarCorrectExtendPanelErrors = document.querySelector(
  "#translation_grammar_correction_panel .grammar_correction_panel-errors"
);

// Initialize dropdown options
var output_select = document.querySelector(
  "#output_dropdown .dropdown-select .select"
);

var input_select = document.querySelector(
  "#input_dropdown .dropdown-select .select"
);
var output_dropdown = document.querySelector("#output_dropdown .dropdown-list");
var input_dropdown = document.querySelector("#input_dropdown .dropdown-list");

const languages = [
  { name: "Vietnamese", code: "vi" },
  { name: "English", code: "en" },
  { name: "Japanese", code: "jp" },
];

input_select.innerHTML = "English";
output_select.innerHTML = "Vietnamese";

input_dropdown.innerHTML = `<div class="dropdown-list_item">Auto detect</div>`;
languages.forEach((language) => {
  if (language.name != input_select.innerHTML) {
    input_dropdown.innerHTML += `<div class="dropdown-list_item">${language.name}</div>`;
  }
  if (language.name != output_select.innerHTML) {
    output_dropdown.innerHTML += `<div class="dropdown-list_item">${language.name}</div>`;
  }
});

// Recursive function for choosing language from options INPUT list
var input_dropdownItems = document.querySelectorAll(
  "#input_dropdown .dropdown-list .dropdown-list_item"
);
function choosingLoopInput(input_dropdownItems) {
  input_dropdownItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      input_select.innerHTML = item.innerHTML;
      if (input_select.innerHTML != "English") {
        grammarCorrectExtend.style.visibility = "hidden";
      } else {
        grammarCorrectExtend.style.visibility = "visible";
      }
      if (input_select.innerHTML == "Auto detect") {
        input_dropdown.innerHTML = "";
      } else {
        input_dropdown.innerHTML = `<div class="dropdown-list_item">Auto detect</div>`;
      }
      languages.forEach((language) => {
        if (language.name != input_select.innerHTML) {
          input_dropdown.innerHTML += `<div class="dropdown-list_item">${language.name}</div>`;
        }
      });
      var updated_input_dropdownItems = document.querySelectorAll(
        "#input_dropdown .dropdown-list .dropdown-list_item"
      );
      choosingLoopInput(updated_input_dropdownItems);
      outputCorrection();
    });
  });
}
choosingLoopInput(input_dropdownItems);

// Recursive function for choosing language from options OUTPUT list
var output_dropdownItems = document.querySelectorAll(
  "#output_dropdown .dropdown-list .dropdown-list_item"
);

function choosingLoopOutput(output_dropdownItems) {
  output_dropdownItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      output_select.innerHTML = item.innerHTML;
      output_dropdown.innerHTML = "";
      languages.forEach((language) => {
        if (language.name != output_select.innerHTML) {
          output_dropdown.innerHTML += `<div class="dropdown-list_item">${language.name}</div>`;
        }
      });
      var updated_output_dropdownItems = document.querySelectorAll(
        "#output_dropdown .dropdown-list .dropdown-list_item"
      );
      choosingLoopOutput(updated_output_dropdownItems);
      outputCorrection();
    });
  });
}
choosingLoopOutput(output_dropdownItems);

var inputField = document.getElementById("translator_input");
var resultField = document.getElementById("translator_result");

// Button state change
function changeBtnToCorrect(btn) {
  btn.innerHTML = `<span class="grammer_correction_button-icon"
        ><ion-icon name="checkmark-done-outline"></ion-icon
      ></span>`;
  btn.style.background = "#2577fb";
}

function errorFoundAction(numberOfErrors) {
  grammarCorrectBtn.innerHTML = numberOfErrors;
  grammarCorrectExtend.style.background = "var(--content)";
  grammarCorrectBtn.style.background = "#EA2237";
}

// Gramma API code
const prepareReplacements = (matches) => {
  //console.log(matches);
  const replacements = [];
  matches.forEach((match) => {
    const new_replacement = {};
    new_replacement.offset = match.offset;
    new_replacement.length = match.length;
    if (match.replacements[0] == null) {
      new_replacement.change = match.word;
    } else {
      new_replacement.change = match.replacements[0].value;
    }
    replacements.push(new_replacement);
  });
  return replacements;
};

const getMatches = async (text) => {
  const { matches } = await gramma.check(text);
  return matches;
};
const grammarCorrect = async (text) => {
  const { matches } = await gramma.check(text);
  const replacements = prepareReplacements(matches);
  return gramma.replaceAll(text, replacements);
};

//

function outputCorrection() {
  if (inputField.value != "") {
    translate(inputField.value, {
      from:
        input_select.innerHTML == "Auto detect" ? "" : input_select.innerHTML,
      to: output_select.innerHTML,
    })
      .then((res) => {
        //console.log(res);
        if (
          res.from.language.iso == "en" ||
          input_select.innerHTML == "English"
        ) {
          grammarCorrectExtend.style.visibility = "visible";
        } else {
          grammarCorrectExtend.style.visibility = "hidden";
        }
        resultField.innerHTML = res.text;
        //   console.log(res.from.language.iso);
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    resultField.innerHTML = "";
  }
}

grammarCorrectBtn.addEventListener("click", () => {
  grammarCorrect(inputField.value).then((res) => {
    inputField.value = res;
    changeBtnToCorrect(grammarCorrectBtn);
    outputCorrection();
    clearErrors();
  });
});

grammarCorrectExtendPanel.style.visibility = "hidden";
grammarCorrectExtendBtn.addEventListener("click", () => {
  if (grammarCorrectExtendPanel.style.visibility != "hidden") {
    grammarCorrectExtendPanel.style.visibility = "hidden";
  } else {
    grammarCorrectExtendPanel.style.visibility = "visible";
  }
});

function displayReplacements(replacements) {
  //var str = "";
  const numOfReplacements = replacements.length;
  //   var maximumDisplay = 2;
  //   if (replacements.length < maximumDisplay) {
  //     maximumDisplay = numOfReplacements;
  //   }
  //   for (var i = 0; i < maximumDisplay; i++) {
  //     str += `<span class="replacement">${replacements[i].value}</span>`;
  //   }
  var str = `<span class="replacement">${replacements[0].value}</span>`;
  return str;
}

function clearErrors() {
  grammarCorrectExtendPanelErrors.innerHTML = "No issues found!";
}
inputField.addEventListener("input", (evt) => {
  setTimeout(function () {
    //find grammarError
    const grammarErrors = getMatches(inputField.value);
    grammarErrors.then((res) => {
      const numberOfErrors = res.length;
      if (numberOfErrors == 0) {
        changeBtnToCorrect(grammarCorrectBtn);
      } else {
        errorFoundAction(numberOfErrors);
      } //grammar correct extension

      grammarCorrectExtendPanelErrors.innerHTML = "";

      res.forEach((error) => {
        console.log(error);
        if (error.rule.id != "WHITESPACE_RULE") {
          grammarCorrectExtendPanelErrors.innerHTML += `<div class="grammar_correction_panel-error">
   
        <span class="long_message">${error.message}</span>

        <div class="replacements">
          <span class="wrong_word">${error.word}</span>
          <span class="arrow">→</span>
          
          ${displayReplacements(error.replacements)}
          
        </div>
      </div>
`;
        }
      });

      var replacements = document.querySelectorAll(
        "#translation_grammar_correction_panel .grammar_correction_panel-errors .replacements .replacement"
      );

      replacements.forEach((replacement) => {
        replacement.addEventListener("click", () => {
          inputField.value = inputField.value.replace(
            replacement.previousSibling.previousSibling.previousSibling
              .previousSibling.innerHTML,
            replacement.innerHTML
          );
          replacement.parentElement.parentElement.remove();
          grammarCorrectBtn.innerHTML -= 1;
          if (grammarCorrectBtn.innerHTML == 0) {
            clearErrors();
            changeBtnToCorrect(grammarCorrectBtn);
          }
          outputCorrection();
        });
      });
    });

    //translate
    outputCorrection();

    //set some delay
  }, 500);
  outputCorrection();
});
