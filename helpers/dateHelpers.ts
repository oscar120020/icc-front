export const getDatePlusOneDay = (date: Date) => {
  return new Date(new Date(date).setDate(
    new Date(date).getDate() + 30
  ));
};
