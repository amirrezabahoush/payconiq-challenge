export const getXDaysAgo = (numOfDays: number, fromDate = new Date()): Date => {
  const daysAgo = new Date(fromDate.getTime());
  daysAgo.setDate(fromDate.getDate() - numOfDays);
  return daysAgo;
};

export const handleCacheConvertedData = ({from, to, amount}: {
  from: string;
  to: string;
  amount: number;
}) => {
  const newData = {from, to, amount, date: Date.now()};
  const prevCache = localStorage.getItem('converted-history');
  if(!prevCache) {
    localStorage.setItem('converted-history', JSON.stringify([newData]))
  } else {
    const prevData = JSON.parse(prevCache);
    localStorage.setItem('converted-history', JSON.stringify([...prevData, newData]));
  }
};
