import Cookies from "js-cookie";
import is from "is_js";
export const userInLoggedIn = () => {
  const token = Cookies.get("_t");
  return token && is.string(token) && token.length;
};
export const getTokenFromCookies = () => {
  return Cookies.get("_t");
};
export const setTokenToCookies = (token: string) => {
  Cookies.set("_t", token, { expires: 7 });
};
export const cleanToken = () => {
  Cookies.remove("_t");
};
export const getFirebaseTokenFromCookies = () => {
  return Cookies.get("f_token");
};
export const setFirebaseTokenFromCookies = (token: string) => {
  return Cookies.set("f_token", token);
};
