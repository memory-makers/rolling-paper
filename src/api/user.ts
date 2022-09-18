import { axiosClient } from '.'

const NICKNAME = 'members'

export const KAKAO_LOGIN_URL = `${import.meta.env.VITE_BASE_URL}/oauth2/authorization/kakao`

export const nickname_API = async (nickname: string | null) => {
  try {
    if (!nickname) return
    const data = { nickname }
    return await axiosClient.put(NICKNAME, data)
  } catch (error) {
    console.log(error, 'error')
  }
}
