import React, { useEffect, useState } from "react";

import {
  Container,
  Title,
  Content,
  Footer,
  DateText,
  Icon,
  EditContainer,
  EditTitle,
  EditContent,
  SaveButton,
} from "./styles/Note";
function Note({ data, handleDeleteNote, setActiveNote, handleUpdateNote }) {

  const date = new Date();

  
  const [edit, setEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(data.title);
  const [editContent, setEditContent] = useState(data.content);

  const handleTitleChange = (event) => {
    setEditTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setEditContent(event.target.value);
  };

  const saveUpdateNote = () => {

    handleUpdateNote({
      id: data.id,
      title: editTitle,
      content: editContent,
      date: date.toLocaleDateString(),
    });
  };

  return (
    <>
      {!edit ? (
        <Container>
          <Title>{data.title}</Title>
          <Content>{data.content}</Content>
          <Footer>
            <DateText>{data.date}</DateText>
            <div>
              <Icon
                onClick={() => {
                  setActiveNote(data.id);
                  setEdit(true);
                }}
                src="icons/edit_note.svg"
                alt=""
              />
              <Icon
                onClick={() => handleDeleteNote(data.id)}
                src="icons/delete_note.svg"
                alt=""
              />
            </div>
          </Footer>
        </Container>
      ) : (
        <EditContainer>
          <EditTitle value={editTitle} onChange={handleTitleChange}></EditTitle>
          <EditContent
            value={editContent}
            onChange={handleContentChange}
          ></EditContent>
          <Footer>
            <DateText>{date.toLocaleDateString()}</DateText>
            <div>
            <SaveButton onClick={() => {
                  setEdit(false);
                  saveUpdateNote();
                }}>Save</SaveButton>

       
            </div>
          </Footer>
        </EditContainer>
      )}
    </>
  );
}

export default Note;
