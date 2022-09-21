import { axiosClient } from '.'

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

// 롤링페이퍼 생성
export const setPaperAPI = async (
  paperTitle: string | null,
  dueDate: string | null,
  theme: string | null
) => {
  try {
    if (!paperTitle || !dueDate) return
    const data = { paper: { paperTitle, dueDate, theme } }
    const res = await axiosClient.post(PAPER, data)
    return res.data
  } catch (error) {
    console.log(error, 'set rolling paper error')
  }
}

// 롤링페이퍼 수정
export const editPaperAPI = async (
  paperId: number,
  paperTitle: string | null,
  dueDate: string | null,
  theme: string | null
) => {
  try {
    const data = { paper: { paperId, paperTitle, dueDate, theme } }
    const res = await axiosClient.put(PAPER, data)
    return res
  } catch (error) {
    console.log(error, 'edit rolling paper error')
  }
}

// 롤링페이퍼 삭제
export const deletePaperAPI = async (paperId: number, deleteYd: string = 'y') => {
  try {
    const data = { paper: { paperId, deleteYd } }
    const res = await axiosClient.put(PAPER, data)
    return res
  } catch (error) {
    console.log(error, 'delete rolling paper error')
  }
}

// 롤링페이퍼 생성
export const getPaperAPI = async () => {
  try {
    const res = await axiosClient.get(PAPER)
    return res.data
  } catch (error) {
    console.log(error, 'get rolling paper error')
  }
}
