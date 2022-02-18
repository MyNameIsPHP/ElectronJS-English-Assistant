import styled from "styled-components";

export const Container = styled.div`
  background-color: #fef68a;
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
  font-weight: 700;

  border-bottom: solid 1px black;
`;
export const Content = styled.p``;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DateText = styled.span``;

export const Icon = styled.img`
  height: 1.3em;
  width: 1.3em;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
  margin-left: 10px;
  filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%)
    contrast(103%);
`;

export const EditContainer = styled.div`
  background-color: #ef4746;
  border-radius: 10px;
  padding: 1rem;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-wrap;
`;

export const EditTitle = styled.textarea`
  font-size: 1.2rem;
  font-weight: 700;
  background: #ef4746;
  border: none;
  height: 30px;
  min-height: 30px;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  border-bottom: solid 1px black;
`;

export const EditContent = styled.textarea`
  font-size: 16px;
  background: #ef4746;
  border: none;
  height: 100%;
  min-height: 30px;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
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
