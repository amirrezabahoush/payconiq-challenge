import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { LatestDataModel } from "models/Latest.model";
import { getConvertResult, getLatest } from "services";
import {
  FormControl,
  TextField,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import Button from "components/Button";
import { ConvertResultDataModel } from "models/ConvertResult.model";
import { handleCacheConvertedData } from "utils";
import { StyledConvertResult, StyledConvertButton } from "./Converter.styled";
import { ConverterProps } from "./Converter.props";
import { useLocation } from "react-router-dom";
import { ConvertionHistoryDataModel } from "models/CacheHistory.model";
import Heading from "components/Heading/Heading.styled";

const Converter = React.memo<ConverterProps>(
  ({ from, to, setFrom, setTo }) => {
    const [amount, setAmount] = useState(0);
    const [data, setData] = useState<LatestDataModel>();
    const [result, setResult] = useState<ConvertResultDataModel>();

    const location = useLocation();

    useEffect(() => {
      const prevCache = localStorage.getItem("converted-history") as any;
      const defaultItem = location
        ? JSON.parse(prevCache || []).find(
            (item: ConvertionHistoryDataModel) =>
              item.date === location?.state?.date
          )
        : undefined;        
      setTo(defaultItem?.to);
      setFrom(defaultItem?.from);
      setAmount(defaultItem?.amount);
    }, []);

    const getData = async () => {
      try {
        const response = await getLatest();
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    useEffect(() => {
      getData();
    }, []);

    useEffect(() => {
      if(result) {
        handleConvertClick();
      }
    }, [from, to, amount])

    const handleSwapClick = () => {
      setFrom(to);
      setTo(from);
    };

    const handleConvertClick = async () => {
      if (!from || !to || !amount) return;
      try {
        const response = await getConvertResult({ from, to, amount });
        setResult(response.data);
        handleCacheConvertedData({ from, to, amount });
      } catch(e) {
        console.log(e);
      }
    };

    return (
      <>
        <Grid item xs={12}>
          <Heading variant="h3">I want to convert</Heading>
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
              value={from}
              onChange={(e) => setFrom(e.target?.value)}
              inputProps={{
                name: "from",
                id: "from",
              }}
            >
              <option>Select</option>
              {Object.keys(data?.rates || []).map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
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
              <option>Select</option>
              {Object.keys(data?.rates || []).map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
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
  }
);

export default Converter;
