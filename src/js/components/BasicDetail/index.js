import React from "react";
import AudioButton from "../AudioButton";
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
} from "./styles/BasicDetail";

function BasicDetail({ data }) {
  const handleSpeechClick = (e) => {
    var speech = new Audio(data.audio[0].url);
    speech.play();
  };
  const handleSpeechClick2 = (e) => {
    var speech = new Audio(data.audio[1].url);
    speech.play();
  };

  return (
    <>
      <TitleBar>
        <Right>
          <Title>{data.word}</Title>
          <AudioButton id="1" handleSpeechClick={handleSpeechClick} />
          {data.audio.length > 1 ? (
            <AudioButton id="2" handleSpeechClick={handleSpeechClick2} />
          ) : (
            ""
          )}
          <Type>{data.type}</Type>
        </Right>
        <Left></Left>
      </TitleBar>
      <PronunciationBar>
        <Pronunciation>{data.pronounciation}</Pronunciation>
      </PronunciationBar>
      <MeaningBar>
        <Tag>• Meaning: </Tag>
        {data.meaning}
      </MeaningBar>
      <ExampleBar>
        <Tag>• Examples:</Tag>
        {data.examples.map((sentence, index) => (
          <Paragraph key={index}> - {sentence}</Paragraph>
        ))}
      </ExampleBar>
    </>
  );
}

export default BasicDetail;
