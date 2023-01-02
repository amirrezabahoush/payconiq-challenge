import { TableHead } from "@mui/material";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
`;
export const StyledTableHead = styled(TableHead)`
  .MuiTableCell-head {
    font-weight: 600;
    color: ${(props) => props.theme?.colors?.text?.tableHeader};
  }
`;
