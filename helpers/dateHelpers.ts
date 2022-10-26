export const getDatePlusOneDay = (date: Date, plus: number) => {
  return new Date(new Date(date).setDate(
    new Date(date).getDate() + plus
  ));
};

export const IsDateHigherThanNow = (date: Date): boolean => {
  return new Date(date) > new Date();
}
