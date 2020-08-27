function numberToString(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function dateToString(dateStr: string) {
  const date = new Date(dateStr);
  return `${date.getMonth() + 1}월 ${date.getDate()}일 ${
    date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  }시 ${date.getMinutes()}분`;
}
export { numberToString, dateToString };
