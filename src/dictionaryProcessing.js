const CambDict = require("camb-dict");
const dictionary = new CambDict.Dictionary();
dictionaryOutputArea = document.querySelector(
  ".output_area.dictionary_output_area"
);

dictionaryDetail = document.querySelector(`.detail_container`);

dictionaryCambDictRes = document.getElementById("dictionary_cambDictResult");
dictionaryIdiomRes = document.getElementById("dictionary_idiomResult");
dictionarySearchBtn = document.getElementById("dictionary_input_icon-search");

url = "http://192.168.1.105:8080/";

// function dictionaryStart() {}
// dictionaryStart();

inputForm.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    dictionarySearchBtn.click();
  }
});

async function getCambDictResult(text) {
  var result = "";
  try {
    result = await dictionary.meaning(text);
  } catch (e) {
    console.log("Word not found");
  }
  return result;
}

async function getIdioms(url) {
  var result = [];
  try {
    result = (await fetch(url)).json();
  } catch (e) {
    console.log("Idiom not found");
  }
  return result;
}

async function getPhrasalVerbs(url) {
  var result = [];
  try {
    result = (await fetch(url)).json();
  } catch (e) {
    console.log("Phrasal verb not found");
  }
  return result;
}

dictionarySearchBtn.addEventListener("click", async () => {
  console.log(inputForm.value);
  const selectedOption = dictionarySelected.innerHTML.toString();
  dictionaryOutputArea.innerHTML = "";
  displayList = [];

  if (selectedOption.includes("Basic English")) {
    result = await getCambDictResult(inputForm.value);
    // console.log(result);
    displayList.push(result);
  } else if (selectedOption.includes("Idioms")) {
    results = await getIdioms(url + `idioms/${inputForm.value}/`);
    // console.log(results);
    displayList = results;
  } else if (selectedOption.includes("Phrasal Verbs")) {
    results = await getIdioms(url + `pverbs/${inputForm.value}/`);
    // console.log(results);
    displayList = results;
  } else if (selectedOption.includes("All")) {
    inputValue = inputForm.value;
    cambDictRes = await getCambDictResult(inputValue);
    if (cambDictRes != "") {
      setCambDictRes(cambDictRes);
    }

    phrasalVerbRes = await getIdioms(url + `pverbs/${inputForm.value}/`);
    if (phrasalVerbRes.length != 0) {
      console.log(phrasalVerbRes);
      setPhrasalVerbRes(phrasalVerbRes);
    }

    idiomRes = await getIdioms(url + `idioms/${inputForm.value}/`);
    if (idiomRes.length != 0) {
      setIdiomRes(idiomRes);
    }

    //Set detail page and add function to buttons
    if (cambDictRes != "") {
      addSpeechToCambDict();
      setCambDictDetail(cambDictRes);
    }

    if (idiomRes.length != 0) {
      setIdiomDetail(idiomRes);
    }
  }

  // console.log(displayList);
  // displayList.forEach((item) => {
  //   console.log(item);
  // });
  // allResults.forEach((res) => {
  //   console.log(res);
  // });
});

function setPhrasalVerbRes(phrasalVerbRes) {
  phrasalVerbHTML = phrasalVerbRes
    .map(function (res, index) {
      return `<div class="dictionary_result">
  <div class="dictionary_result-header">
    <div class="dictionary_result-headerTitle" >
      <span title="See detail" class="pverbWord" id="${index}-pverb"
        >${res.pverb}</span
      >
      <button class="speech_button">
      <span
        ><ion-icon name="volume-high-outline"></ion-icon
      ></span>
    </button>

    </div>
    <span class="dictionary_result-type">PHRASAL VERB</span>
  </div>
  <div class="dictionary_result-body">
    <p class="dictionary_result-bodyMeaning">
      <span class="bodyTag">• Meaning:</span>
      ${res.definition}
    </p>
    <p class="dictionary_result-bodyExample">
      <span class="bodyTag">• Example:</span>
      ${res.example}
    </p>
  </div>
</div>`;
    })
    .join("");

  dictionaryOutputArea.innerHTML += phrasalVerbHTML;
}

function setIdiomDetail(idiomRes) {
  document.querySelectorAll(".word.idiomWord").forEach((word) => {
    word.addEventListener("click", () => {
      displayDetail();
      dictionaryDetail.innerHTML = ` 
      <div class="detail_titleBar">
      <div class="detail_titleBar-right">
        <span class="detail_title"> ${
          idiomRes[parseInt(word.id.split("-")[0])].words
        } </span>
        <button class="speech_button" id="detail_speechBtn3">
        <span><ion-icon name="volume-high-outline"></ion-icon></span>
        </button>
        <span class="detail_type">IDIOM</span>
      </div>
        <button class="detail_goBack" onClick = goBackToDictionary()>
          <span>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </span>
        </button>
      </div>
      <div class="detail_pronunciationBar">
        <span class="detail_pronunciation">${
          idiomRes[parseInt(word.id.split("-")[0])].also
        }</span>
      </div>
      <div class="detail_meaningBar">
        <span class="detail_tag">• Meaning: </span>
        ${JSON.parse(idiomRes[parseInt(word.id.split("-")[0])].meaning)
          .map(function (sentence) {
            return `<p> - ${sentence}</p>`;
          })
          .join("")}
      </div>
      <div class="detail_exampleBar">
        <span class="detail_tag">• Examples: </span>
        ${JSON.parse(idiomRes[parseInt(word.id.split("-")[0])].example)
          .map(function (sentence) {
            return `<p> - ${sentence}</p>`;
          })
          .join("")}
      </div>`;
    });
  });
}

function setIdiomRes(idiomRes) {
  idiomHTML = idiomRes
    .map(function (res, index) {
      return `<div class="dictionary_result">
    <div class="dictionary_result-header">
      <div class="dictionary_result-headerTitle" >
        <span title="See detail" class="word idiomWord" id="${index}-idiom"
          >${res.words}</span
        >
        <button class="speech_button">
        <span
          ><ion-icon name="volume-high-outline"></ion-icon
        ></span>
      </button>
        <span class="pronunciation">${res.also}</span>

      </div>
      <span class="dictionary_result-type">IDIOM</span>
    </div>
    <div class="dictionary_result-body">
      <p class="dictionary_result-bodyMeaning">
        <span class="bodyTag">• Meaning:</span>
        ${JSON.parse(res.meaning)[0]}
      </p>
      <p class="dictionary_result-bodyExample">
        <span class="bodyTag">• Example:</span>
        ${JSON.parse(res.example)[0]}
      </p>
    </div>
  </div>`;
    })
    .join("");
  dictionaryOutputArea.innerHTML += idiomHTML;
}

function setCambDictRes(cambDictRes) {
  dictionaryOutputArea.innerHTML += `<div class="dictionary_result">
    <div class="dictionary_result-header">
      <div class="dictionary_result-headerTitle" >
        <span title="See detail" class="word" id="cambDict_word"
          >${cambDictRes.word}</span
        >
        <span class="pronunciation">${cambDictRes.pronounciation}</span>
        <button class="speech_button" id="dictionary_resultSpeech">
          <span
            ><ion-icon name="volume-high-outline"></ion-icon
          ></span>
        </button>
      </div>
      <span class="dictionary_result-type">${cambDictRes.type}</span>
    </div>
    <div class="dictionary_result-body">
      <p class="dictionary_result-bodyMeaning">
        <span class="bodyTag">• Meaning:</span>
        ${cambDictRes.meaning}
      </p>
      <p class="dictionary_result-bodyExample">
        <span class="bodyTag">• Example:</span>
        ${cambDictRes.examples[0]}
      </p>
    </div>
  </div>`;
}

function goBackToDictionary() {
  document.querySelector(`.dictionary_container`).style.display = "block";
  document.querySelector(`.detail_container`).style.display = "none";
}

function addSpeechToCambDict() {
  document
    .querySelector("#dictionary_resultSpeech")
    .addEventListener("click", function () {
      var speech = new Audio(cambDictRes.audio[0].url);
      speech.play();
    });
}

function displayDetail() {
  document.querySelector(`.dictionary_container`).style.display = "none";
  document.querySelector(`.detail_container`).style.display = "block";
}
function setCambDictDetail(cambDictRes) {
  word = document
    .querySelector("#cambDict_word")
    .addEventListener("click", function (e) {
      displayDetail();
      dictionaryDetail.innerHTML = ` 
        <div class="detail_titleBar">
        <div class="detail_titleBar-right">
        <span class="detail_title"> ${cambDictRes.word} </span>
        <span class="detail_type">${cambDictRes.type}</span>
        </div>
          <button class="detail_goBack" onClick = goBackToDictionary()>
            <span>
              <ion-icon name="arrow-back-outline"></ion-icon>
            </span>
          </button>
        </div>
        <div class="detail_pronunciationBar">
          <span class="detail_pronunciation">${
            cambDictRes.pronounciation
          }</span>
          <button class="speech_button" id="detail_speechBtn1">
            <span><ion-icon name="volume-high-outline"></ion-icon></span>
          </button>
          <button class="speech_button" id="detail_speechBtn2">
            <span><ion-icon name="volume-high-outline"></ion-icon></span>
          </button>
        </div>
        <div class="detail_meaningBar">
          <span class="detail_tag">• Meaning: </span>
          <p class="detail_meaning">
          ${cambDictRes.meaning}
          </p>
        </div>
        <div class="detail_exampleBar">
          <span class="detail_tag">• Examples: </span>
          ${cambDictRes.examples
            .map(function (sentence) {
              return `<p> - ${sentence}</p>`;
            })
            .join("")}
        </div>`;

      document
        .querySelector("#detail_speechBtn1")
        .addEventListener("click", function () {
          var speech = new Audio(cambDictRes.audio[0].url);
          speech.play();
        });

      document
        .querySelector("#detail_speechBtn2")
        .addEventListener("click", function () {
          var speech = new Audio(cambDictRes.audio[1].url);
          speech.play();
        });
    });
}
