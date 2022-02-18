import React from "react";
import AddNote from "../../components/AddNote";
import Note from "../../components/Note";

import {
  Container,
  NoteList,
  InputBar,
  SearchInput,
  SearchIcon,
  EditNote,
  CloseButton,
} from "./styles/Notes";
function Notes({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleSearchNote,
  activeNote,
  setActiveNote,
  handleUpdateNote,
  display,
}) {
  return (
    <>
      <Container display={display}>
        <InputBar>
          <SearchIcon>
            <img src="icons/search.svg" alt="SearchIcon" />
          </SearchIcon>
          <SearchInput
            type="text"
            autocomplete="off"
            autoFocus={true}
            placeholder="Type to search..."
            onChange={(event) => handleSearchNote(event.target.value)}
          />
        </InputBar>
        <NoteList>
          {notes.map((note) => (
            <Note
              data={note}
              key={note.id}
              handleDeleteNote={handleDeleteNote}
              setActiveNote={setActiveNote}
              handleUpdateNote={handleUpdateNote}
            />
          ))}

          <AddNote handleAddNote={handleAddNote} />
        </NoteList>
      </Container>
    </>
  );
}

export default Notes;
