import React from 'react'
import { KAKAO_LOGIN_URL } from '@/api/user'

const KakaoButton = () => (
  <a href={KAKAO_LOGIN_URL}>
    <img className="kakao" src={`./imgs/kakao_login_medium_wide.png`} />
  </a>
)

export default KakaoButton
