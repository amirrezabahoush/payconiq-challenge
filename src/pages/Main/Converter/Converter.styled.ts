import styled from "styled-components";

export const StyledConvertButton = styled.button`
  all: unset;
  background-color: #ffffff;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  cursor: pointer;
  box-shadow: ${(props) => props.theme?.card?.boxShadow};
  svg {
    color: ${(props) => props.theme?.colors?.primary};
  }
`;

export const StyledConvertResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 16px;
  color: ${(props) => props.theme?.colors?.text?.default};
  .equal-converter {
    font-size: ${(props) => props.theme?.fontSize?.pageTitle};;
    margin: 2rem 0;
    .to-equal {
      color: ${(props) => props.theme?.colors?.accent};
    }
  }
  p {
    text-align: center;
  }
`;
