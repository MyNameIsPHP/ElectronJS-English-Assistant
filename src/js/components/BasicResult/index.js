import React, { useState } from "react";
import AddNoteButton from "../AddNoteButton";
import AudioButton from "../AudioButton";
import BasicDetail from "../BasicDetail";
import {
  Container,
  Header,
  Body,
  Title,
  Word,
  Pronunciation,
  Type,
  Meaning,
  Example,
  Tag,
  Detail,
  GoBackButton,
} from "./styles/BasicResult";

function BasicResult({ data, handleAddNote }) {
  const [showDetail, setShowDetail] = useState(false);
  const handleClickAddNote = () => {
    const addContent = `• Meaning: ${data.meaning.slice(0, -2) + "."}\n ${
      data.examples[0] ? `• Example: ${data.examples[0]}` : ""
    }`;
    handleAddNote(data.word, addContent);
  };

  const handleSpeechClick = () => {
    var speech = new Audio(data.audio[0].url);
    speech.play();
  };

  return (
    <>
      <Container>
        <Header>
          <Title>
            <Word onClick={() => setShowDetail(true)} title="See detail">
              {data.word}
            </Word>
            <Pronunciation>{data.pronounciation}</Pronunciation>
            <AudioButton handleSpeechClick={handleSpeechClick}/>
          </Title>
          <Title>
            <Type>{data.type}</Type>
            <AddNoteButton handleAddNote={handleClickAddNote} />
          </Title>
        </Header>
        <Body>
          <Meaning>
            <Tag>• Meaning: </Tag>
            {data.meaning.slice(0, -2) + "."}
          </Meaning>
          <Example>
            <Tag>• Example: </Tag>
            {data.examples[0] ? data.examples[0] : "no examples."}
          </Example>
        </Body>
      </Container>
      <Detail showDetail={showDetail}>
        <GoBackButton onClick={() => setShowDetail(false)}>
          <img src="icons/go_back.svg" alt="" />
        </GoBackButton>
        <BasicDetail data={data} category="detail" />
      </Detail>
    </>
  );
}

export default BasicResult;
