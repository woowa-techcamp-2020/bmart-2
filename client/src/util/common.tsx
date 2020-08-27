function numberToString(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const getCookie = function (name: string) {
  const value = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return value ? value[2] : null;
};

const deleteCookie = function (name: string) {
  const date = new Date();
  document.cookie = `${name}= ` + `; expires=${date.toUTCString()}; path=/`;
};

// cofs.tistory.com/363 [CofS]

export { numberToString, getCookie, deleteCookie };
