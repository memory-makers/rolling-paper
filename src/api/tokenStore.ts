export type Token = string | undefined

const tokenStore = {
  setAccessToken(access_token: Token) {
    if (!access_token) {
      return
    }
    localStorage.setItem('access_token', access_token)
  },
  setRefreshToken(refresh_token: Token) {
    if (!refresh_token) {
      return
    }
    localStorage.setItem('refresh_token', refresh_token)
  },
  getAccessToken() {
    return localStorage.getItem('access_token')
  },
  getRefreshToken() {
    return localStorage.getItem('refresh_token')
  },
  clearToken() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
  }
}

export default tokenStore
