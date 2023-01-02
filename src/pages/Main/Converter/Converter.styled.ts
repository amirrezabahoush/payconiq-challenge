import styled from "styled-components";

export const StyledConvertButton = styled.button`
  all: unset;
  background-color: #ffffff;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  svg {
    color: ${(props) => props.theme?.colors?.primary};
  }
`;

export const StyledConvertResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme?.colors?.text?.default};
  .equal-converter {
    font-size: 3rem;
    margin: 2rem 0;
    .to-equal {
      color: ${(props) => props.theme?.colors?.accent};
    }
  }
  p {
    text-align: center;
  }
`;
