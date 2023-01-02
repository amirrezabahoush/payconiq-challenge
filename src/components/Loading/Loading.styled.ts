import styled from "styled-components";

const LoadingWrapper = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  height: 100%;
  width: 100%;
  background-color: rgba(209, 210, 211, 0.2);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LoadingWrapper;
