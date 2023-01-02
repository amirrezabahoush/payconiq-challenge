export type ConvertResultDataModel = {
  date: string;
  historical: boolean;
  info: { rate: number };
  motd: {
    msg: string;
    url: string;
  };
  query: { from: string; to: string; amount: number };
  result: number;
  success: boolean;
};