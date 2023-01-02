import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { LatestDataModel } from "models/Latest.model";
import { getConvertResult, getLatest } from "services";
import Loading from "components/Loading";
import {
  FormControl,
  TextField,
  Typography,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import Button from "components/Button";
import { ConvertResultDataModel } from "models/ConvertResult.model";
import { handleCacheConvertedData } from "utils";
import { StyledConvertResult, StyledConvertButton } from "./Converter.styled";
import { ConverterProps } from "./Converter.props";

const Converter = React.memo<ConverterProps>(({ from, to, setFrom, setTo }) => {
  const [amount, setAmount] = useState(0);
  const [data, setData] = useState<LatestDataModel>();
  const [result, setResult] = useState<ConvertResultDataModel>();
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await getLatest();
      setData(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSwapClick = () => {
    setFrom(to);
    setTo(from);
  };

  const handleConvertClick = async () => {
    try {
      setIsLoading(true);
      const response = await getConvertResult({ from, to, amount });
      setResult(response.data);
      handleCacheConvertedData({ from, to, amount });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h3" className="font-weight-bold">
          I want to convert
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="Amount"
          label="Amount"
          variant="standard"
          value={amount}
          onChange={(e) => setAmount(+e.target?.value)}
        />
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="from">
            From
          </InputLabel>
          <NativeSelect
            // defaultValue={30}
            value={from}
            onChange={(e) => setFrom(e.target?.value)}
            inputProps={{
              name: "from",
              id: "from",
            }}
          >
            {Object.keys(data?.rates || []).map((item) => (
              <option value={item}>{item}</option>
            ))}
          </NativeSelect>
        </FormControl>
      </Grid>
      <Grid
        item
        xs={1}
        className="d-flex justify-content-center align-items-center"
        onClick={handleSwapClick}
      >
        <StyledConvertButton>
          <CompareArrowsIcon />
        </StyledConvertButton>
      </Grid>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="to">
            To
          </InputLabel>
          <NativeSelect
            value={to}
            onChange={(e) => setTo(e.target?.value)}
            inputProps={{
              name: "to",
              id: "to",
            }}
          >
            {Object.keys(data?.rates || []).map((item) => (
              <option value={item}>{item}</option>
            ))}
          </NativeSelect>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <Button onClick={handleConvertClick}>CONVERT</Button>
      </Grid>
      {(result?.result || 0) > 0 && (
        <>
          <Grid item xs={12}>
            <StyledConvertResult>
              {(result?.result || 0) > 0 && (
                <div className="equal-converter">
                  {amount} {from} ={" "}
                  <span className="font-weight-bold to-equal">
                    {result?.result} {to}
                  </span>
                </div>
              )}

              {result?.info?.rate && (
                <div>
                  <p className="mb-1">
                    1 {from} = {result?.info?.rate} {to}
                  </p>
                  <p>
                    1 {to} = {1 / result?.info?.rate} {from}
                  </p>
                </div>
              )}
            </StyledConvertResult>
          </Grid>
          <hr />
        </>
      )}
    </>
  );
});

export default Converter;
