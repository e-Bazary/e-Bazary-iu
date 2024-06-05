import { AuthProvider } from "react-admin";
let isConnected = false;
const authProviders: AuthProvider = {
  login: ({ username, password }) => {
    if (username === "admin" && password === "password") {
      isConnected = true;
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  },
  logout: () => {
    isConnected = false;
    return Promise.resolve();
  },
  checkAuth: () => {
    if (isConnected) {
      return Promise.resolve();
    }
    return Promise.reject();
  },
  checkError: (error) => Promise.resolve(),
  getPermissions: () => Promise.resolve(),
};
export default authProviders;
