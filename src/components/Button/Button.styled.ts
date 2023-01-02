import { ReactElement } from "react";
import styled from "styled-components";

const StyledButton = styled.button<React.HTMLProps<HTMLButtonElement> & { children: ReactElement}>`
  height: 45px;
  width: 150px;
  padding: 0.5rem;
  border: solid 1px #3792d3;
  background-color:#1976d2;
  color: #FFFFFF;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  &:focus &:hover {
    background-color: #fff;
    color: #3792d3;
    border-color: #fff;
  }
`;

export default StyledButton;
