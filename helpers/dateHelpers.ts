export const getDatePlusOneDay = (date: Date, plus: number) => {
  return new Date(new Date(date).setDate(new Date(date).getDate() + plus));
};

export const IsDateHigherThanNow = (date: Date): boolean => {
  return new Date(`${date} 01:00:00`) > new Date();
};

export const IsDateBetweenEvent = (date: Date): boolean => {
  const startDate = new Date(`${date} 15:00:00`)
  const endDate = new Date(`${date} 16:30:00`)

  if (
    new Date() >= startDate &&
    new Date() <= endDate
  ) {
    return true
  }
  return false
};
