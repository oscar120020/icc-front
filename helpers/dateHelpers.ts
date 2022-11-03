export const getDatePlusOneDay = (date: Date, plus: number) => {
  return new Date(new Date(date).setDate(new Date(date).getDate() + plus));
};

export const IsDateHigherThanNow = (date: Date): boolean => {
  return new Date(date) > new Date();
};

export const IsDateBetweenEvent = (date: Date): boolean => {
  const startDate = new Date(new Date(`${date} 15:00:00`).setDate(new Date(`${date} 15:00:00`).getDate() - 1))
  const endDate = new Date(new Date(`${date} 16:30:00`).setDate(new Date(`${date} 16:30:00`).getDate() - 1))
  
  if (
    new Date() >= startDate &&
    new Date() <= endDate
  ) {
    return true
  }
  return false
};
