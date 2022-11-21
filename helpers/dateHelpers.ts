export const getDatePlusOneDay = (date: Date, plus: number) => {
  return new Date(new Date(date).setDate(new Date(date).getDate() + plus));
};

export const IsDateHigherThanNow = (date: Date | string): boolean => {
  return new Date(date) > new Date();
};

export const IsDateBetweenEvent = (date1: Date | string, date2: Date | string): boolean => {
  const startDate = new Date(date1)
  const endDate = new Date(date2)

  if (
    new Date() >= startDate &&
    new Date() <= endDate
  ) {
    return true
  }
  return false
};

export const timestampFormater = (time: string) => {
  return new Date(time).toLocaleString()
}

export const getTime = (date: Date | string) => {
  return new Date(date).toLocaleTimeString()
}
