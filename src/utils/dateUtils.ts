export const toFormattedDate = (date: Date, time?: Date) => {
  const now = new Date();
  let result = "";

  if (date.getFullYear() !== now.getFullYear()) {
    result += `${date.getFullYear}년 `;
  }
  result += `${date.getMonth() + 1}월 ${date.getDate()}일 `;

  if (time) {
    result += `${date.getHours()}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  }

  return result;
};

export const toFormattedDateAgo = (date: Date) => {
  const now = new Date();
  const givenDate = new Date(date);

  const diffInMilliseconds = now.getTime() - givenDate.getTime();
  const diffInMinutes = Math.floor(diffInMilliseconds / 60000);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInMonths =
    now.getMonth() -
    givenDate.getMonth() +
    12 * (now.getFullYear() - givenDate.getFullYear());
  const diffInYears = now.getFullYear() - givenDate.getFullYear();

  if (diffInDays < 1) {
    return `${givenDate.getHours()}:${givenDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  } else if (diffInDays <= 30) {
    return `${diffInDays}일 전`;
  } else if (diffInMonths < 12) {
    return `${diffInMonths}달 전`;
  } else {
    return `${diffInYears}년 전`;
  }
};

export const getAvailableMonth = (days: Date[]) => {
  if (days.length === 0) return undefined;
  return new Date(Math.min(...days.map((date) => date.getTime())));
};
