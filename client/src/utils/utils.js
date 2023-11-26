import { systemConstants } from "../constants";

export const logout = () => {
  localStorage.clear(systemConstants.IS_USER_LOGGED_IN);
  window.location.replace("/");
};
