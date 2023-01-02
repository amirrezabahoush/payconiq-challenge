import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { StyledWrapper } from "./Main.styled";
import Loading from "../../components/Loading";
import Converter from "./Converter";
import ExchangeHistory from "./ExchangeHistory";

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  if (isLoading) {
    return <Loading />;
  }

  return (
    <StyledWrapper>
      <Grid container spacing={2}>
        <Converter from={from} to={to} setFrom={setFrom} setTo={setTo} />
        <ExchangeHistory from={from} to={to} />
      </Grid>
    </StyledWrapper>
  );
};

export default Main;
