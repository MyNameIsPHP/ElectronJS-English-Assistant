import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  padding: 1vh;
  border-radius: 8px;

  margin-right: 10px;
  height: 40px;
  align-items: center;

  justify-content: space-between;

  font-size: 1.2rem;

  height: 100%;
`;

export const CorrectButton = styled.button`
  background: ${(props) => (props.isCorrect ? "var(--decor)" : "red")};
  cursor: pointer;
  padding-top: 0.5vh;
  color: var(--general_text_color);
  border-radius: 50%;
  height: 5.5vh;
  width: 5.5vh;
  max-height: 2rem;
  max-width: 2rem;
  font-size: 3vh;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0px 4px;

  font-weight: 700;
`;

export const ExtendButton = styled.button`
  cursor: pointer;
  padding-top: 0.5vh;
  color: var(--general_text_color);
  border-radius: 50%;
  height: 5.5vh;
  width: 5.5vh;
  max-height: 2rem;
  max-width: 2rem;

  font-size: 3vh;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0px 4px;

  margin-right: 0px;
  background: var(--decor);
  border: none;
`;
export const Icon = styled.img`
  height: 1rem;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%)
    contrast(103%);
`;
export const Extend = styled.div`
  position: absolute;

  top: 50;
  left: 50;

  width: 250px;
  height: 350px;

  background: var(--grammar_extend-background);
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  visibility: ${(props) => (props.showExtend ? "visible" : "hidden")};
  color: black;
`;

export const ExtendHeader = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  height: 30px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: move;
  z-index: 10;
  font-size: 2rem;
  color: black;
`;

export const ExtendBody = styled.div`
  background: var(--grammar_extend-background);
  padding: 3%;
  height: 94%;
  overflow-x: auto;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  text-align: center;
`;

export const ErrorCorrection = styled.div`
  width: 100%;

  margin-bottom: 3%;
  background: white;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  font-size: 1rem;
  padding: 3%;
  padding-left: 10px;
  align-items: flex-start;

  text-align: left;
`;
export const Message = styled.span`
  overflow: hidden;
  font-size: 0.8rem;
  font-weight: 600;
  text-overflow: ellipsis;
`;

export const Replacement = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const WrongWord = styled.span`
  text-decoration-line: line-through;
  text-decoration-color: red;
`;

export const RightWord = styled.span`
  background-color: var(--decor);

  color: white;
  margin-left: 3%;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  padding: 0px 5px;
`;
