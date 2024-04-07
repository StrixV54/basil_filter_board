export function calculateNumberOfDays(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const differenceInMs = end - start;
    const numberOfDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
    return numberOfDays;
  }