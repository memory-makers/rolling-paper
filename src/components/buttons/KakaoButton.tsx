import React from 'react'
import { test_API } from '../../api'
import { login_API } from '../../api/user'

// const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
//   import.meta.env.VITE_KAKAO_REST_API_KEY
// }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URL}`
const url = 'http://14.39.205.218:8080/oauth2/authorization/kakao'

const KakaoButton = () => {
  // const test = async () => {
  //   const response = await test_API()
  //   console.log(response)
  // }

  return (
    // <a href={KAKAO_LOGIN_URL}>
    <a href={url}>
      {/* <img className="kakao" src={`./imgs/kakao-login.png`} onClick={() => test()} /> */}
      <img className="kakao" src={`./imgs/kakao-login.png`} />
    </a>
  )
}

export default KakaoButton
