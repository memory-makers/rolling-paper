export const getGaKey = (): string => {
  if (import.meta.env.VITE_NODE_ENV === 'production') {
    return import.meta.env.VITE_GA_KEY_PROD ?? ''
  }
  return ''
}
