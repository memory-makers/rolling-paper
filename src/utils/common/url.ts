export const getGaKey = (): string => {
  return process.env.REACT_APP_GA_KEY_PROD ?? ''
}
