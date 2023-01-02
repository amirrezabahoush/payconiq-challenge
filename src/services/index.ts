import axios from "axios";
import { LatestDataModel } from "models/Latest.model";
import { TimeseriesDataModel } from "models/Timeseries.model";
import { ConvertResultDataModel } from "../models/ConvertResult.model";

const api = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT,
});

export const getLatest = () => {
  return api.get<LatestDataModel>("latest");
};

type ConvertResultProps = {
  from: string;
  to: string;
  amount: number;
};

export const getConvertResult = ({ from, to, amount }: ConvertResultProps) => {
  return api.get<ConvertResultDataModel>(
    `convert?from=${from}&to=${to}&amount=${amount}`
  );
};

type ExchangeHistoryProps = {
  startDate: string;
  endDate: string;
};

export const getExchangeHistory = ({
  startDate,
  endDate,
}: ExchangeHistoryProps) => {
  return api.get<TimeseriesDataModel>(
    `timeseries?start_date=${startDate}&end_date=${endDate}`
  );
};
