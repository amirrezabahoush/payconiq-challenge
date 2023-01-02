import { ConvertionHistoryDataModel } from "models/CacheHistory.model";

export const getXDaysAgo = (numOfDays: number, fromDate = new Date()): Date => {
  const daysAgo = new Date(fromDate.getTime());
  daysAgo.setDate(fromDate.getDate() - numOfDays);
  return daysAgo;
};

export const handleCacheConvertedData = ({
  from,
  to,
  amount,
}: Omit<ConvertionHistoryDataModel, "date">): void => {
  if(!from || !to || !amount) return;
  const newData = { from, to, amount, date: Date.now() };
  const prevCache = localStorage.getItem("converted-history");
  if (!prevCache) {
    localStorage.setItem("converted-history", JSON.stringify([newData]));
  } else {
    const prevData = JSON.parse(prevCache);
    localStorage.setItem(
      "converted-history",
      JSON.stringify([...prevData, newData])
    );
  }
};

export const removeFromCache = (date: number) => {
  const prevCache = localStorage.getItem("converted-history");
  if (!prevCache) return;
  const newData = JSON.parse(prevCache).filter((item: ConvertionHistoryDataModel) => item.date !== date);
  localStorage.setItem("converted-history", JSON.stringify(newData));
}

export const convertDateFormat = (timestamp: number): string => {
  const ISODate = new Date(timestamp).toISOString();
  const [date, time] = ISODate.split('T');
  const [year, month, day] = date.split('-');
  const [hours, minutes] = time.split(':');
  return `${day}/${month}/${year} @ ${hours}:${minutes}`
};