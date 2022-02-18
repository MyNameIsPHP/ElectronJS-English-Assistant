import styled from "styled-components";

export const Button = styled.button`
  background: var(--decor);
  border: none;
  cursor: pointer;
  color: var(--general_text_color);

  width: 26px ;
  height: 26px ;
  border-radius: 13px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin-left: 10px;
  :hover {
    background: var(--decor_hover);
    border: 1px solid var(--field_border);
  }

  img {
    width: 1rem;
  }
`;
