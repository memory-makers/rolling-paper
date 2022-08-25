import React, { useEffect, useState } from 'react'
import axios from 'axios'

const KakaoRedirect = () => {
  // const KAKAO_CODE = new URL(window.location.href).searchParams.get('code')
  // const getKakaoTokenHandler = async (code: string) => {
  //   const data: any = {
  //     grant_type: 'authorization_code',
  //     client_id: import.meta.env.VITE_KAKAO_REST_API_KEY,
  //     redirect_uri: import.meta.env.VITE_KAKAO_REDIRECT_URL,
  //     code
  //   }
  //   const queryString = Object.keys(data)
  //     .map((k: any) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
  //     .join('&')

  //   //토큰 발급 REST API
  //   const response = await axios.post('https://kauth.kakao.com/oauth/token', queryString, {
  //     headers: {
  //       'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
  //     }
  //   })

  //   console.log(response)
  // }

  // useEffect(() => {
  //   if (!KAKAO_CODE) return
  //   getKakaoTokenHandler(KAKAO_CODE)
  // }, [])

  const [success, setSuccess] = useState(false)

  const token = new URL(window.location.href).searchParams.get('code')

  return (
    <div>
      {`토큰: `}
      <button
        onClick={async () => {
          const response = await axios.post('http://14.39.205.218:8080/card', {
            cardText: 'text',
            cardColor: 'color',
            paperId: '1',
            token
          })

          console.log(response)

          if (response) {
            setSuccess(true)
          }
        }}
      >
        토큰보내보기
      </button>

      <div>{success && '성공'}</div>
      <div>{!success && '실패'}</div>
    </div>
  )
}

export default KakaoRedirect
