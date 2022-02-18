import styled from "styled-components";

export const NoteNew = styled.div`
  background-color: #67d7cc;
  border-radius: 10px;
  padding: 1rem;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-wrap;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.8);
`;

export const Title = styled.span`
  font-size: 1.2rem;
  border-bottom: solid 1px black;
`;

export const ContentText = styled.textarea`
  font-size: 1rem;
  border: none;
  resize: none;
  background-color: #67d7cc;

  :focus {
    outline: none;
  }
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Date = styled.span`
  font-size: 0.9rem;
`;

export const SaveButton = styled.button`
  background-color: #e1e1e1;
  border: none;
  border-radius: 15px;
  padding: 5px 10px 5px 10px;
  :hover {
    background-color: #ededed;
    cursor: pointer;
  }

  :focus {
    outline: none;
  }
`;
