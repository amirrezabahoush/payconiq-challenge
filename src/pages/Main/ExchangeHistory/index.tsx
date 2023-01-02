import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { getExchangeHistory } from "services";
import Loading from "components/Loading";
import {
  FormControl,
  MenuItem,
  Select,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { TimeseriesDataModel } from "models/Timeseries.model";
import { getXDaysAgo } from "utils";
import LineChart from "components/LineChart";
import { StyledTableHead } from "./../Main.styled";

const ExchangeHistory = React.memo<{ from: string; to: string }>(
  ({ from, to }) => {
    const [duration, setDuration] = useState(7);
    const [mode, setMode] = useState("table");
    const [data, setData] = useState<TimeseriesDataModel>();
    const [statistics, setStatistics] = useState({
      lowest: 0,
      highest: 0,
      average: 0,
    });
    const [chart, setChart] = useState<{
      dates: string[];
      exchangeRates: number[];
    }>({ dates: [], exchangeRates: [] });
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
      setIsLoading(true);
      try {
        const startDate = getXDaysAgo(duration)?.toISOString().split("T")[0];
        const endDate = new Date().toISOString().split("T")[0];
        const response = await getExchangeHistory({ startDate, endDate });
        setData(response.data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
      getData();
    }, [duration]);

    useEffect(() => {
      if (data?.rates) {
        calculateStatistics(data?.rates as any);
        createExchangeRate();
      }
    }, [from, to, data]);

    const calculateStatistics = (rates: Pick<TimeseriesDataModel, "rates">) => {
      let lowest = Number.MAX_SAFE_INTEGER,
        highest = 0;
      Object.values(rates).map((item) => {
        const exchangeRate = (item[`${to}`] as any) / (item[`${from}`] as any);
        if (exchangeRate > highest) highest = exchangeRate;
        if (exchangeRate < lowest) lowest = exchangeRate;
      });
      setStatistics({ lowest, highest, average: (highest + lowest) / 2 });
    };

    const createExchangeRate = () => {
      const dates: string[] = [],
        exchangeRates: number[] = [];
      Object.entries(data?.rates || {}).map(([date, values]) => {
        dates.push(date);
        exchangeRates.push(values[`${to}`] / values[`${from}`]);
      });
      setChart({ dates, exchangeRates });
    };

    if (isLoading) {
      return <Loading />;
    }

    return (
      <>
        <Grid item xs={12} spacing={3}>
          <Typography variant="h5" className="font-weight-bold">
            Exchange History
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <FormControl variant="standard" sx={{ minWidth: 120, width: "50%" }}>
            <Select
              id="Duration"
              value={duration}
              label="Duration"
              onChange={(e) => setDuration(+e.target?.value)}
            >
              <MenuItem value={7} key={7}>
                7 Days
              </MenuItem>
              <MenuItem value={14} key={14}>
                14 Days
              </MenuItem>
              <MenuItem value={30} key={30}>
                30 Days
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e) => setMode(e.target.value)}
              value={mode}
            >
              <FormControlLabel
                value="table"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#009688",
                      },
                    }}
                  />
                }
                label="Table"
              />
              <FormControlLabel
                value="chart"
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked": {
                        color: "#009688",
                      },
                    }}
                  />
                }
                label="Chart"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              {mode === "table" ? (
                <TableContainer component={Paper}>
                  <Table aria-label="exchange history table">
                    <StyledTableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="right">Exchange Rate</TableCell>
                      </TableRow>
                    </StyledTableHead>
                    <TableBody>
                      {Object.entries(data?.rates || {}).map(
                        ([date, values]) => (
                          <TableRow
                            key={date}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {date}
                            </TableCell>
                            <TableCell align="right">
                              {values[`${to}`] / values[`${from}`]}
                            </TableCell>
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              ) : (
                <LineChart
                  series={chart?.exchangeRates}
                  categories={chart?.dates}
                />
              )}
            </Grid>
            <Grid item xs={6}>
              <TableContainer component={Paper}>
                <Table aria-label="statistics table">
                  <StyledTableHead>
                    <TableRow>
                      <TableCell>Statistics</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </StyledTableHead>
                  <TableBody>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="left">Lowest</TableCell>
                      <TableCell align="right">{statistics.lowest}</TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="left">Highest</TableCell>
                      <TableCell align="right">{statistics.highest}</TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="left">Average</TableCell>
                      <TableCell align="right">{statistics.average}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
);

export default ExchangeHistory;
