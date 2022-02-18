import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--title_bar);
  width: 100vw;
  height: calc(100vh - 40px);
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  border-radius: 5px;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  box-shadow: 0px 0px 18px -5px #000000;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: var(--general_text_color);
  padding: 15px 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Title = styled.h1`
  color: var(--general_text_color);
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: gray;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

export const Link = styled(ReachRouterLink)`
  color: var(--general_text_color);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background: var(--content);
  border-radius: 4px;
  border: 0;
  color: var(--general_text_color);
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Submit = styled.button`
  background: var(--decor);
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: var(--general_text_color);
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`;
