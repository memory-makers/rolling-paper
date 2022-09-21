export const convertTimeToDate = (time: number) => {
  const date = new Date(time).toISOString().slice(0, 10)
  return date
}
