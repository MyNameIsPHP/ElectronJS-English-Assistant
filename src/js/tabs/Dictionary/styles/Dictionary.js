import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  background: var(--background);
  width: 100vw;
  height: calc(100vh - 40px);
  opacity: ${(props) => (props.transparent ? 0.7 : 1)};
`;
export const InputArea = styled.div`
  height: 13%;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-left: 50px;
  background-color: var(--background);
`;
export const OutputArea = styled.div`
  padding-left: 65px;
  padding-right: 10px;
  padding-top: 13px;
  height: 85%;
  display: flex;
  flex-direction: column;
  background: var(--background);
  overflow: auto;
`;

export const OutputAreaCenter = styled.div`
  padding-left: 65px;
  padding-right: 10px;
  height: 85%;
  display: flex;
  flex-direction: column;
  background: var(--background);
  overflow: auto;

  align-items: center;
  justify-content: center;
`;
export const InputBar = styled.div`
  box-sizing: border-box;
  display: flex;
  word-break: keep-all;
  text-size-adjust: 100%;
  flex-direction: row;
  width: 90%;
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
  height: 40px;
  font-size: 18px;
  padding-left: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const Dropdown = styled.select`
  background-color: var(--content);
  color: var(--general_text_color);
  border: none;
  height: 40px;

  border-left: solid 1px gray;
`;

export const SearchButton = styled.button`  
  border: 1px solid var(--content);
  background: var(--content);
  box-shadow: inset 1px 1px 2px 0 rgba(0, 0, 0, 0.1);
  color: var(--general_text_color);
  line-height: normal;

  
  width: 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  background: var(--decor);
  cursor: pointer;

  img {
    width: 50%;
    height: auto;
  }
}`;

export const NoResultText = styled.div`
  width: 100%;
  text-align: center;
  color: var(--general_text_color);
  font-size: 1 rem;
`;
