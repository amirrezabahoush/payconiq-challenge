import axios from "axios";
import { LatestDataModel } from "models/Latest.model";
import { TimeseriesDataModel } from "models/Timeseries.model";
import { ConvertResultDataModel } from "../models/ConvertResult.model";

export const getLatest = () => {
  return axios.get<LatestDataModel>("https://api.exchangerate.host/latest");
};

export const getConvertResult = ({ from, to, amount }: { [key: string]: string | number }) => {
  return axios.get<ConvertResultDataModel>(
    `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`
  );
};

export const getExchangeHistory = ({ startDate, endDate }: { [key: string]: string }) => {
  return axios.get<TimeseriesDataModel>(
    `https://api.exchangerate.host/timeseries?start_date=${startDate}&end_date=${endDate}`
  );
};
