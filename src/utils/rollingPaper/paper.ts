import { getIdToNicknameAPI, getPaperIdAPI } from '@/api/user'

// 타임스탬프 값을 '2022-00-00' 값으로 변환
export const convertTimeToDate = (time: number) => {
  const date = new Date(time).toISOString().slice(0, 10)
  return date
}

// 현재 날짜를 구하는 함수
export const convertTimeAndOffsetToDate = () => {
  const date = new Date()
  date.setHours(0, 0, 0, 0)
  const offset = date.getTimezoneOffset() * 60000
  const currentDate = new Date(date.getTime() - offset).toISOString().slice(0, 10)
  return new Date(currentDate).getTime() / 1000 / 60 / 60 / 24
}

// n일 후 날짜 구하기 (1 : 1일후, -1 : 1일전)
export const convertDaysFromToday = (days: number) => {
  const today = new Date()
  const newDay = new Date(today.setDate(today.getDate() + days)).toISOString().slice(0, 10)
  return newDay
}

// url의 rollingPaperId(uuid)에서 paperUrl, paperId, hostName 변환
export const convertUrlToHostData = async (rollingPaperId: string) => {
  const paperId = await getPaperIdAPI(rollingPaperId)
  if (!paperId) return
  const urlNickname = await getIdToNicknameAPI(paperId)
  if (!urlNickname) return
  const data = { paperUrl: rollingPaperId, paperId, hostName: urlNickname }
  return data
}
