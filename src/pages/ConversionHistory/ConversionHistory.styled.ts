import styled from "styled-components";

const StyledActionIcon = styled.span`
  display: flex;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  &.delete {
    color: ${(props) => props.theme?.colors?.warn};
  }
  &.view {
    color: ${(props) => props.theme?.colors?.primary};
  }
  svg {
    margin: 4px;
  }
`;

export default StyledActionIcon;
