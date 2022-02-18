import React, { useState, useEffect } from "react";
import AddNoteButton from "../AddNoteButton";
import AudioButton from "../AudioButton";
import IdiomDetail from "../IdiomDetail";
import Artyom from "artyom.js";

import {
  Container,
  Header,
  Body,
  Title,
  Word,
  Also,
  Type,
  Meaning,
  Example,
  Tag,
  DetailContainer,
  GoBackButton,
} from "./styles/IdiomsResult";
function IdiomsResult({ data, handleAddNote }) {
  const [showDetail, setShowDetail] = useState(false);

  const handleClickAddNote = () => {
    const addContent = `• Meaning: ${JSON.parse(data.meaning)[0]}\n• Example: ${
      JSON.parse(data.example)[0]
    }`;
    handleAddNote(data.words, addContent);
  };

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
    <>
      <Container>
        <Header>
          <Title>
            <Word onClick={() => setShowDetail(true)} title="See detail">
              {data.words}
            </Word>
            <AudioButton handleSpeechClick={handleSpeechClick} />
            <Also onClick={() => handleSpeechClick()}>{data.also}</Also>
          </Title>
          <Title>
            <Type>IDIOM</Type>
            <AddNoteButton handleAddNote={handleClickAddNote} />
          </Title>
        </Header>
        <Body>
          <Meaning>
            <Tag>• Meaning: </Tag>
            {JSON.parse(data.meaning)[0]}
          </Meaning>
          <Example>
            <Tag>• Example: </Tag>
            {JSON.parse(data.example)[0]}
          </Example>
        </Body>
      </Container>
      <DetailContainer showDetail={showDetail}>
        <GoBackButton onClick={() => setShowDetail(false)}>
          <img src="icons/go_back.svg" alt="" />
        </GoBackButton>
        <IdiomDetail data={data} category="idiom" />
      </DetailContainer>
    </>
  );
}

export default IdiomsResult;
