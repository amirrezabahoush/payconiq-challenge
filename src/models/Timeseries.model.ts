export type TimeseriesDataModel = {
  base: string;
  end_date: string;
  motd?: {
    msg: string;
    url: string;
  };
  msg?: string;
  url?: string;
  rates: {
    [key: string]: {
      [key: string]: number;
    };
  };
  start_date: string;
  success: boolean;
  timeseries: boolean;
};