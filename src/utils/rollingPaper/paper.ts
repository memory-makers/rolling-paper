export const convertTimeToDate = (time: string) => {
  const date = new Date(time).toISOString().slice(0, 10)
  return date
}
