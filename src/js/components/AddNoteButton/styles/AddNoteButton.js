import styled from "styled-components";

export const Button = styled.button`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  background: var(--decor);
  border: none;

  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: var(--decor_hover);
  }

  
  
`;
