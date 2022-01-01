// var speechRecognition =  webkitSpeechRecognition;

// var recognition = new webkitSpeechRecognition();

// recognition.continuous = true;

// var content = "";

// var speechBtn = document.querySelector(
//   ".translator_bottom_bar .translator_bar-left .speech_button"
// );

// recognition.onstart = function () {};

// recognition.onspeechend = function () {};

// recognition.onerror = function () {};

// recognition.onresult = function (event) {
//   var current = event.resultIndex;
//   var transcript = event.results[current][0].transcript;
//   content += transcript;
//   inputField.value = content;
// };

// speechBtn.addEventListener("click", function (event) {
//   if (content.length) {
//     content += "";
//   }

//   recognition.start();
// });

// window.SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();
// recognition.interimResults = true;

// recognition.addEventListener("result", (e) => {
//   console.log(e);
// });

// recognition.start();

var artyom = new Artyom();

// Jarvis.say("Hello World !");

// artyom.redirectRecognizedTextOutput(function(recognized,isFinal){
//     if(isFinal){
//         console.log("Final recognized text: " + recognized);
//     }else{
//         console.log(recognized);
//     }
// });
const { systemPreferences } = require("electron");

// systemPreferences.askForMediaAccess("microphone");

// var UserDictation = artyom.newDictation({
//   continuous: true, // Enable continuous if HTTPS connection
//   onResult: function (text) {
//     // Do something with the text
//     console.log("ddd");
//     console.log(text);
//   },
//   onStart: function () {
//     console.log("Dictation started by the user");
//   },
//   onEnd: function () {
//     alert("Dictation stopped by the user");
//   },
// });

// UserDictation.start();
