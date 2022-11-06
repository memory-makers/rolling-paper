export const CLIENT_URL = 'https://rolling-paper-makers.vercel.app'
export const CLIENT_PAPER_URL = `${CLIENT_URL}/rollingpaper/`
export const LOCAL_URL = 'http://localhost:5173'

export const checkProdOrDev = () => {
  if (process.env.VITE_NODE_ENV === 'production') {
    return CLIENT_URL
  }
  return LOCAL_URL
}

export default { CLIENT_URL, CLIENT_PAPER_URL, LOCAL_URL, checkProdOrDev }
