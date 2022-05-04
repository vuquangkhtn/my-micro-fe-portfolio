const monthDiff = (dateFrom: Date, dateTo: Date) => {
  return dateTo.getMonth() - dateFrom.getMonth() +
    (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));
};

const getDateFrom = (dateString: string = '') => {
  const splited = dateString.split('/');
  const date = new Date(Number.parseInt(splited[1]), Number.parseInt(splited[0]));
  return date;
};

export const generateMonths = (fromDateString: string, toDateString: string) => {
  const currentToDate = toDateString ? getDateFrom(toDateString) : new Date();
  const fromDate = getDateFrom(fromDateString);
  const months = monthDiff(fromDate, currentToDate);
  return `${months} mth${months > 1 ? 's' : ''}`;
};
