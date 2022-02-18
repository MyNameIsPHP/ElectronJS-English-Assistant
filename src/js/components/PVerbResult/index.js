import React, { useState } from "react";
import Artyom from "artyom.js";
import AddNoteButton from "../AddNoteButton";
import AudioButton from "../AudioButton";
import {
  Container,
  Header,
  Body,
  Title,
  Word,
  Also,
  Audio,
  Type,
  Meaning,
  Example,
  Tag,
  DetailContainer,
  GoBackButton,
} from "./styles/PVerbResult";
function PVerbResult({ data, handleAddNote }) {
  const [showDetail, setShowDetail] = useState(false);
  const handleClickAddNote = () => {
    const addContent = `• Meaning: ${data.definition}\n• Example: ${data.example}`;
    handleAddNote(data.pverb, addContent);
  };

  const artyom = new Artyom();

  const handleSpeechClick = () => {
    artyom.say(data.pverb, {
      onStart: function () {
        // console.log("The text is being readed");
      },
      onEnd: function () {
        // console.log("Well, that was all. Try with a longer text !");
      },
    });
  };

  return (
    <>
      <Container>
        <Header>
          <Title>
            <Word onClick={() => setShowDetail(true)} title="See detail">
              {data.pverb}
            </Word>
            <AudioButton handleSpeechClick={handleSpeechClick} />
          </Title>
          <Title>
            <Type>PHRASAL VERB</Type>
            <AddNoteButton handleAddNote={handleClickAddNote} />
          </Title>
        </Header>
        <Body>
          <Meaning>
            <Tag>• Meaning: </Tag>
            {data.definition}
          </Meaning>
          <Example>
            <Tag>• Example: </Tag>
            {data.example}
          </Example>
        </Body>
      </Container>
    </>
  );
}

export default PVerbResult;
