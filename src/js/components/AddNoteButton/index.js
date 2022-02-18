import React from "react";
import { Button } from "./styles/AddNoteButton";

function AddNoteButton({ handleAddNote }) {
  return (
    <>
      <Button
        onClick={() => {
          handleAddNote();
        }}
      >
        <img src="icons/add_note.svg" alt="" />
      </Button>
    </>
  );
}

export default AddNoteButton;
