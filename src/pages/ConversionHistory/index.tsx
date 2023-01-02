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
  TableRow,
} from "@mui/material";
import Empty from "components/Empty";
import { Delete, RemoveRedEye } from "@mui/icons-material";
import StyledActionIcon from "./ConversionHistory.styled";
import { ConvertionHistoryDataModel } from "models/CacheHistory.model";
import { convertDateFormat, removeFromCache } from "utils";
import { useNavigate } from "react-router-dom";
import Heading from "components/Heading/Heading.styled";
import TableHeader from "components/TableHead/TableHead.styled";

const ConversionHistory = () => {
  const navigate = useNavigate();

  const handleRemoveItem = (date: number) => {
    removeFromCache(date);
    window.location.reload();
  };

  const handleViewClick = (date: number) => {
    navigate("/", {
      state: {
        date,
      },
    });
  };

  const cachedHistory = localStorage.getItem("converted-history");

  return (
    <StyledWrapper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Heading variant="h5">Conversion history</Heading>
        </Grid>
        {cachedHistory ? (
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table aria-label="exchange history table">
                <TableHeader>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Event</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {JSON.parse(cachedHistory).map(
                    ({
                      from,
                      to,
                      amount,
                      date,
                    }: ConvertionHistoryDataModel) => (
                      <TableRow
                      className="table-row"
                        key={date}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {convertDateFormat(date)}
                        </TableCell>
                        <TableCell>
                          Converted an amount of {amount} from {from} to {to}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          <div className="d-flex align-items-center justify-content-between action-wrapper">
                            <StyledActionIcon
                              className="view"
                              onClick={() => handleViewClick(date)}
                            >
                              <RemoveRedEye />
                              View
                            </StyledActionIcon>
                            <StyledActionIcon
                              className="delete"
                              onClick={() => handleRemoveItem(date)}
                            >
                              <Delete />
                              Delete from history
                            </StyledActionIcon>
                          </div>
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
