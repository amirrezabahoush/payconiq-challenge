import { AppBar } from "@mui/material";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)`
  &.MuiAppBar-root {
    background-color: #ffffff;
    button{
      color: ${(props) => props.theme?.colors?.text?.default};
    }
    
  }
`;

export default StyledAppBar;
