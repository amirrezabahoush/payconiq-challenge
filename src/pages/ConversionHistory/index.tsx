import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Loading from "../../components/Loading";
import { StyledWrapper } from "pages/Main/Main.styled";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Empty from "components/Empty";
import { Delete, RemoveRedEye } from "@mui/icons-material";

const ConversionHistory = () => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <Loading />;
  }

  const cachedHistory = localStorage.getItem("converted-history");

  return (
    <StyledWrapper>
      <Grid container spacing={2}>
        <Grid item xs={12} spacing={3}>
          <Typography variant="h5" className="font-weight-bold">
            Exchange History
          </Typography>
        </Grid>
        {cachedHistory ? (
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table aria-label="exchange history table">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Event</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {JSON.parse(cachedHistory).map(
                    ({
                      from,
                      to,
                      amount,
                      date,
                    }: {
                      from: string;
                      to: string;
                      amount: number;
                      date: string;
                    }) => (
                      <TableRow
                        key={`${from}-${to}-${amount}`}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {date}
                        </TableCell>
                        <TableCell>
                          Converted an amount of {amount} from {from} to {to}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <span style={{display: 'flex', alignItems: 'center'}}><RemoveRedEye className="m-1"/>View</span>
                          <span style={{display: 'flex', alignItems: 'center'}}>
                            <Delete className="m-1" />
                            Delete from history
                          </span>
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        ) : (
          <Empty text="Conversion History is empty!" />
        )}
      </Grid>
    </StyledWrapper>
  );
};

export default ConversionHistory;
