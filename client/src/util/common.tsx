function numberToString(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function dateToString(dateStr: string) {
  const date = new Date(dateStr);
  return `${date.getMonth() + 1}월 ${date.getDate()}일 ${
    date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  }시 ${date.getMinutes()}분`;
}

const getCookie = function (name: string) {
  const value = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return value ? value[2] : null;
};

const deleteCookie = function (name: string) {
  const date = new Date();
  document.cookie = `${name}= ` + `; expires=${date.toUTCString()}; path=/`;
};
const isLogin = () => {
  return getCookie('name') !== null;
};

export { numberToString, getCookie, deleteCookie, dateToString, isLogin };
