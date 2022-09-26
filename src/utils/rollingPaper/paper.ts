// 타임스탬프 값을 '2022-00-00' 값으로 변환
export const convertTimeToDate = (time: number) => {
  const date = new Date(time).toISOString().slice(0, 10)
  return date
}

// n일 후 날짜 구하기 (1 : 1일후, -1 : 1일전)
export const convertDaysFromToday = (days: number) => {
  const today = new Date()
  const newDay = new Date(today.setDate(today.getDate() + days)).toISOString().slice(0, 10)
  return newDay
}
