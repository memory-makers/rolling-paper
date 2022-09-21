import { axiosClient } from '.'
import { convertTimeToDate } from '@/utils/rollingPaper/paper'

const NICKNAME = 'members'
const PAPER = 'papers'

export const KAKAO_LOGIN_URL = `${import.meta.env.VITE_BASE_URL}/oauth2/authorization/kakao`

// 닉네임 설정
export const setNicknameAPI = async (nickname: string | null) => {
  try {
    if (!nickname) return
    const data = { nickname }
    const res = await axiosClient.put(NICKNAME, data)
    return res
  } catch (error) {
    console.log(error, 'set nickname error')
  }
}

// 닉네임 조회
export const getNicknameAPI = async () => {
  try {
    const res = await axiosClient.get(`${NICKNAME}/nickname`)
    return res.data
  } catch (error) {
    console.log(error, 'get nickname error')
  }
}
export interface PaperAPIResponse {
  result: Result
}

interface Result {
  paper: Paper
  status: string
}

interface Paper {
  paperId: number
  paperTitle: string
  theme: string
  paperUrl: string
  deleteYn?: any
  openStatus?: any
  userId: string
  createdAt?: any
  updatedAt?: any
  dueDate: number
}

interface AddPaperAPIParams {
  paperTitle: string | null
  dueDate: string | null
  theme: string | null
}

// 롤링페이퍼 생성
export const setPaperAPI = async ({ paperTitle, dueDate, theme }: AddPaperAPIParams) => {
  try {
    const paper = { paper: { paperTitle, dueDate, theme } }
    const { data } = await axiosClient.post<PaperAPIResponse>(PAPER, paper)
    return data
  } catch (error) {
    console.log(error, 'set rolling paper error')
  }
}

interface EditPaperAPIParams {
  paperId: number
  paperTitle: string | null
  dueDate: string | null
  theme: string | null
}

// 롤링페이퍼 수정
export const editPaperAPI = async ({ paperId, paperTitle, dueDate, theme }: EditPaperAPIParams) => {
  try {
    const data = { paper: { paperId, paperTitle, dueDate, theme } }
    const res = await axiosClient.put<PaperAPIResponse>(PAPER, data)
    return res
  } catch (error) {
    console.log(error, 'edit rolling paper error')
  }
}

// 롤링페이퍼 삭제
export const deletePaperAPI = async (paperId: number) => {
  try {
    const data = { paper: { paperId, deleteYn: 'y' } }
    const res = await axiosClient.put(PAPER, data)
    return res
  } catch (error) {
    console.log(error, 'delete rolling paper error')
  }
}

// 롤링페이퍼 조회
interface GetPaperAPIResponse {
  result: Result[]
}

interface Result {
  paperId: number
  paperTitle: string
  theme: string
  paperUrl: string
  deleteYn: string
  openStatus: string
  userId: string
  createdAt: number
  updatedAt: number
  dueDate: number
}

export const getPaperAPI = async () => {
  try {
    const { data } = await axiosClient.get<GetPaperAPIResponse>(PAPER)
    return data.result.map((item) => {
      return { ...item, dueDate: convertTimeToDate(item.dueDate) }
    })
  } catch (error) {
    console.log(error, 'get rolling paper error')
  }
}
