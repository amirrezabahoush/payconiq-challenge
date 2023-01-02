import { TableHead } from "@mui/material";
import styled from "styled-components";

const TableHeader = styled(TableHead)`
  .MuiTableCell-head {
    font-weight: 600;
    color: ${(props) => props.theme?.colors?.text?.tableHeader};
  }
`;

export default TableHeader;
