import styled from "styled-components";

export const TitleBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Left = styled.div``;

export const MeaningBar = styled.div`
  background: var(--content);
  border-radius: 8px;
  padding: 2%;
  margin-bottom: 2%;
`;

export const ExampleBar = styled.div`
  background: var(--content);
  border-radius: 8px;
  padding: 2%;
`;

export const PronunciationBar = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 1.5%;
`;

export const Pronunciation = styled.span`
  font-style: italic;
  font-size: 18px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

export const Title = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 26px;

  background: var(--decor);
  padding: 5px 5px;
  border-radius: 8px;
  font-weight: 900;
`;

export const SpeechButton = styled.button``;
export const Type = styled.span`
  color: var(--decor);
  margin-left: 10px;
`;

export const Paragraph = styled.p``;

export const Tag = styled.span`
  font-weight: bold;
  font-size: 20px;
`;
