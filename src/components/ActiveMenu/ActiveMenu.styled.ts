import { Link } from "react-router-dom";
import styled from "styled-components";

const ActiveMenuLink = styled(Link)`
  &.active {
    position: relative;
    &:after {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${(props) => props.theme?.colors?.primary};
      height: 2px;
    }
    button {
      font-weight: bold !important;
    }
  }
`;

export default ActiveMenuLink;
