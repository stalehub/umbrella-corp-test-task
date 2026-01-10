const DateValidator = (date: string) => {
  const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
  };

  if (!isDate(date)) {
    throw new Error('Incorrect date string format found');
  }

  return date;
};

export default DateValidator;
