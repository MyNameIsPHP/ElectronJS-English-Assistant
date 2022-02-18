import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  background: var(--background);
  width: 100vw;
  height: calc(100vh - 40px);

  padding-right: 15px;

  overflow: hidden;
  overflow-y: auto;

  margin-right: auto;
  margin-left: auto;
}
`;

export const NoteList = styled.div`
  padding-left: 70px;
  display: grid;
  grid-gap: 0.7rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export const SearchInput = styled.input`
  border: 1px solid var(--content);
  background: var(--content);
  box-shadow: inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1);
  color: var(--general_text_color);
  line-height: normal;

  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  display: inline-block;
  text-align: start;
  appearance: auto;
  -webkit-rtl-ordering: logical;
  cursor: text;

  width: 100%;
  height: 7vh;
  font-size: 18px;
  padding-left: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const InputBar = styled.div`
  box-sizing: border-box;
  display: flex;
  word-break: keep-all;
  text-size-adjust: 100%;
  flex-direction: row;
  width: 90%;

  margin-left: 70px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const SearchIcon = styled.button`  
  border: 1px solid var(--content);
  background: var(--content);
  box-shadow: inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1);
  color: var(--general_text_color);
  line-height: normal;

  width: 10vw;

  max-width: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 7vh;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;


  width: 12vw;

  img {
    width: 1rem;
    height: auto;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
    brightness(103%) contrast(103%);
  }

  :focus {
    outline: none;
  }
}`;

export const EditNote = styled.div`
  height: 400px;
  width: 400px;
  position: absolute;
  top: 0;
  left: 50px;
  background: red;
`;

export const CloseButton = styled.div``;
