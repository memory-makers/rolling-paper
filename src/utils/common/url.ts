export const getGaKey = (): string => {
  return import.meta.env.REACT_APP_GA_KEY_PROD ?? ''
}
