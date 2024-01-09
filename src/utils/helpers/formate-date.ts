export function formateDate(date: Date | string) {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  const day = new Date(date).getDay();
  const hours = new Date(date).getHours();
  const minuts = new Date(date).getMinutes();
  const seconds = new Date(date).getSeconds();
  return { year, month: month + 1, day: day + 1, hours, minuts, seconds };
}

export function dateToTime(date: string) {
  const { hours, minuts } = formateDate(date);
  return `${hours.toString().padStart(2, "0")}:${minuts
    .toString()
    .padStart(2, "0")}`;
}
