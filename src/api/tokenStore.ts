export interface Token {
  access_token: string;
  refresh_token: string;
}

const tokenStore = {
  setToken(tokenObj: Token) {
    localStorage.setItem("access_token", tokenObj.access_token);
    localStorage.setItem("refresh_token", tokenObj.refresh_token);
  },

  getAccessToken() {
    return localStorage.getItem("access_token");
  },
  getRefreshToken() {
    return localStorage.getItem("refresh_token");
  },
  clearToken() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  },
};

export default tokenStore;
