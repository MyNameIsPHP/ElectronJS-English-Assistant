import styled from "styled-components";
export const Background = styled.div`
  background: var(--background);
  overflow: hidden;

  opacity: ${(props) => (props.transparent ? 0.7 : 1)};
`;
export const Container = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  background: var(--background);
  width: calc(100vw - 60px);
  margin-left: 60px;
  height: calc(100vh - 40px);
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const InputArea = styled.div`
  height: 50%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 8px;
  margin-bottom: 0px;

  border-radius: 10px;
  @media (min-width: 768px) {
    height: calc(100% - 16px);
    margin-right: 0px;
    width: 50%;
  }

  box-shadow: 0px 0px 18px -5px #000000;
`;
export const OutputArea = styled.div`
  height: 50%;
  display: inline-flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin: 8px;
  border-radius: 10px;

  @media (min-width: 768px) {
    height: calc(100% - 16px);
    width: 50%;
  }

  box-shadow: 0px 0px 18px -5px #000000;
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  background-color: var(--background);
  border: 1px solid var(--field_border);
  border-bottom: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  font-size: 1rem;
  height: 20%;
  max-height: 48px;
`;

export const BottomBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  background-color: var(--background);

  border: 1px solid var(--field_border);
  border-bottom: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  border: 1px solid var(--field_border);
  border-top: none;

  font-size: 1rem;
  height: 20%;
  max-height: 48px;
`;
export const BarLeft = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  margin-left: 10px;
  font-size: 1.2rem;
  color: var(--general_text_color);
`;

//not used
export const BarRight = styled.div`
  display: flex;
  flex-direction: row;

  padding: 1vh;
  border-radius: 4px;

  margin-right: 10px;
  margin-top: 0.3%;
  height: 90%;
  align-items: center;

  justify-content: space-between;

  font-size: 1.2rem;
  background: var(--content);
`;

export const Input = styled.textarea`
  padding: 15px 25px;
  font-size: 20px;
  color: var(--general_text_color);
  background: var(--background);
  height: 100%;
  width: 100%;
  border: 1px solid var(--field_border);
  border-bottom: 1px outset var(--field_border);
  resize: none;
`;

export const Result = styled.div`
  padding: 15px 25px;
  font-size: 20px;
  color: var(--general_text_color);
  background: var(--content);
  height: 100%;

  width: 100%;
  border: 1px solid var(--field_border);
  border-bottom: 1px outset var(--field_border);

  overflow-wrap: break-word;
  word-break: break-word;
  word-wrap: break-word;
  display: block;

  overflow: auto;
`;

export const Dropdown = styled.select`
  margin-left: 8px;
  background-color: var(--content);
  color: var(--general_text_color);
  border: none;
  font-size: 0.8em;
  border-radius: 8px;
`;
