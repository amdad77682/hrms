import { setTokenToCookies } from "../utils/authentication";

export async function loginAction(reqBody: any) {
  try {
    setTokenToCookies("true");
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
}
