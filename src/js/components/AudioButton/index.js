import React from "react";
import { Button } from "./styles/AudioButton";

function AudioButton({ handleSpeechClick }) {
  return (
    <>
      <Button onClick={() => handleSpeechClick()}>
        <img src="icons/audio.svg" alt="" />
      </Button>
    </>
  );
}

export default AudioButton;
