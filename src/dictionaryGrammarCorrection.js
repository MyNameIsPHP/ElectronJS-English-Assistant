dictionaryGrammarCorrectionBtn = document.getElementById("dictionary_gcb");

dictionaryGrammarCorrectionBtn.addEventListener("click", () => {});

inputForm.addEventListener("input", () => {
  const grammarErrors = getMatches(inputForm.value);
  grammarErrors.then((res) => {
    const numberOfErrors = res.length;
    if (numberOfErrors == 0) {
      changeBtnToCorrect(dictionaryGrammarCorrectionBtn);
    } else {
      dictionaryGrammarCorrectionBtn.style.background = "#EA2237";
      dictionaryGrammarCorrectionBtn.innerHTML = numberOfErrors;
    }
  });
});

dictionaryGrammarCorrectionBtn.addEventListener("click", () => {
  grammarCorrect(inputForm.value).then((res) => {
    inputForm.value = res;
    changeBtnToCorrect(dictionaryGrammarCorrectionBtn);
  });
});
