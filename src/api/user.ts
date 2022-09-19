import { axiosClient } from '.'

const NICKNAME = 'members'
const PAPER = 'papers'

export const KAKAO_LOGIN_URL = `${import.meta.env.VITE_BASE_URL}/oauth2/authorization/kakao`

export const setNicknameAPI = async (nickname: string | null) => {
  try {
    if (!nickname) return
    const data = { nickname }
    return await axiosClient.put(NICKNAME, data)
  } catch (error) {
    console.log(error, 'set nickname error')
  }
}

export const getNicknameAPI = async () => {
  try {
    const res = await axiosClient.get(`${NICKNAME}/nickname`)
    return res.data
  } catch (error) {
    console.log(error, 'get nickname error')
  }
}

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
