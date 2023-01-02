import { Typography } from "@mui/material";
import { TypographyProps } from "@mui/system";
import styled from "styled-components";

const Heading = styled(Typography)<TypographyProps>`
  font-weight: bold !important;
  color: ${props => props.theme?.colors?.text?.default}
`;

export default Heading;
