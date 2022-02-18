import React, { useState } from "react";
import GrammarCorrection from "../GrammarCorrection";
import {
  NoteNew,
  ContentText,
  Footer,
  Date,
  SaveButton,
} from "./styles/AddNote";

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText.split("\n")[0], noteText.split("\n")[1]);
      setNoteText("");
    }
  };

  return (
    <>
      <NoteNew>
        <ContentText
          rows="8"
          cols="10"
          value={noteText}
          placeholder="Type to add a note..."
          onChange={handleChange}
        ></ContentText>

        <Footer>
          <Date>First line will be the title</Date>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <GrammarCorrection input={noteText} setInput={setNoteText} />
            <SaveButton onClick={handleSaveClick}>Save</SaveButton>
          </div>
        </Footer>
      </NoteNew>
    </>
  );
}

export default AddNote;
