import React from "react";
import AudioButton from "../AudioButton";
import Artyom from "artyom.js";

import {
  TitleBar,
  Right,
  Left,
  Title,
  Type,
  PronunciationBar,
  Pronunciation,
  MeaningBar,
  Tag,
  ExampleBar,
  Paragraph,
} from "./styles/IdiomDetail";

function IdiomDetail({ data }) {
  const artyom = new Artyom();

  const handleSpeechClick = () => {
    artyom.say(data.words, {
      onStart: function () {
        // console.log("The text is being readed");
      },
      onEnd: function () {
        // console.log("Well, that was all. Try with a longer text !");
      },
    });
  };

  return (
    <div>
      <TitleBar>
        <Right>
          <Title>{data.words}</Title>
          <AudioButton handleSpeechClick={handleSpeechClick} />
          <Type>IDIOM</Type>
        </Right>
        <Left></Left>
      </TitleBar>
      <PronunciationBar>
        <Pronunciation>{data.also}</Pronunciation>
      </PronunciationBar>
      <MeaningBar>
        <Tag>• Meaning: </Tag>
        {JSON.parse(data.meaning).map((sentence, index) => (
          <Paragraph key={index}> - {sentence}</Paragraph>
        ))}
      </MeaningBar>
      <ExampleBar>
        <Tag>• Examples:</Tag>
        {JSON.parse(data.example).map((sentence, index) => (
          <Paragraph key={index}> - {sentence}</Paragraph>
        ))}
      </ExampleBar>
    </div>
  );
}

export default IdiomDetail;
