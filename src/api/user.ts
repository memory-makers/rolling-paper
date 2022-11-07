import { axiosClient } from '.'
import { convertTimeToDate } from '@/utils/rollingPaper/paper'
import { checkProdOrDev } from '@/config/commonLink'

const NICKNAME = 'members'
const PAPER = 'papers'

const prodOrDev = checkProdOrDev()

export const KAKAO_LOGIN_URL = `${import.meta.env.VITE_BASE_URL}/oauth2/authorization/kakao`
export const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${
  import.meta.env.VITE_KAKAO_CLIENT_ID
}&logout_redirect_uri=${prodOrDev}/logout`

// paperUrl로 paperId 조회
interface GetPaperIdAPIResponse {
  result: Result
}

interface Result {
  paperId: number
  status: string
}

export const getPaperIdAPI = async (paperUrl: string) => {
  try {
    const { data } = await axiosClient.get<GetPaperIdAPIResponse>(`${PAPER}/url`, {
      params: { paperUrl }
    })
    return data.result.paperId
  } catch (error) {
    console.log(error, 'get paperId error')
  }
}

// paperId로 token없이 nickname 조회
interface getIdToNicknameAPIResponse {
  result: Result
}

interface Result {
  nickname: string
  status: string
}

export const getIdToNicknameAPI = async (paperId: number) => {
  try {
    const { data } = await axiosClient.get<getIdToNicknameAPIResponse>(
      `${PAPER}/${paperId}/nickname`
    )
    return data.result.nickname
  } catch (error) {
    console.log(error, 'get paperId to nickname error')
  }
}

// 토큰 닉네임 설정
export const setNicknameAPI = async (nickname: string | null) => {
  try {
    if (!nickname) return
    const name = { nickname }
    const { data } = await axiosClient.put(NICKNAME, name)
    return data
  } catch (error) {
    console.log(error, 'set nickname error')
  }
}

// 토큰 닉네임 조회
export const getNicknameAPI = async () => {
  try {
    const { data } = await axiosClient.get<string>(`${NICKNAME}/nickname`)
    return data
  } catch (error) {
    console.log(error, 'get nickname error')
  }
}

// 롤링페이퍼 생성
export interface PaperAPIResponse {
  result: Result
}

interface Result {
  paperId: number
  paperUrl: string
  status: string
}

interface AddPaperAPIParams {
  paperTitle: string
  dueDate: string
  theme: string
}

export const setPaperAPI = async ({ paperTitle, dueDate, theme }: AddPaperAPIParams) => {
  try {
    const paper = { paperTitle, dueDate, theme }
    const { data } = await axiosClient.post<PaperAPIResponse>(PAPER, paper)
    return data
  } catch (error) {
    console.log(error, 'set rolling paper error')
  }
}

// 롤링페이퍼 수정
interface EditPaperAPIParams {
  paperId: number
  paperTitle: string
  dueDate: string
  theme: string
}

export const editPaperAPI = async ({ paperId, paperTitle, dueDate, theme }: EditPaperAPIParams) => {
  try {
    const paper = { paperId, paperTitle, dueDate, theme }
    const { data } = await axiosClient.put(PAPER, paper)
    console.log('res', data)
    return data
  } catch (error) {
    console.log(error, 'edit rolling paper error')
  }
}

// 롤링페이퍼 삭제
export const deletePaperAPI = async (paperId: number) => {
  try {
    const res = await axiosClient.delete(`${PAPER}/${paperId}`)
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
