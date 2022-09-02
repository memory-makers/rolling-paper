import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

const KakaoRedirect = () => {
  const AUTH_TOKEN = new URL(window.location.href).searchParams.get('token')

  useEffect(() => {
    if (!AUTH_TOKEN) return
    console.log(AUTH_TOKEN)
  }, [])

  return (
    <div>
      <button
        onClick={async () => {
          const response = await axios.post(
            `${BASE_URL}/paper`,
            {
              paperTitle: 'tommy temp title',
              theme: 'tommy temp theme'
            },
            {
              headers: {
                Authorization: `Bearer ${AUTH_TOKEN}`
              }
            }
          )

          if (response) {
            console.log(response)
          }
        }}
      >
        페이퍼 만들기
      </button>
      <button
        onClick={async () => {
          const response = await axios.get(`${BASE_URL}/paper`, {
            headers: {
              Authorization: `Bearer ${AUTH_TOKEN}`
            }
          })
          if (response) {
            console.log(response)
          }
        }}
      >
        롤링페이퍼 정보 얻기
      </button>
    </div>
  )
}

export default KakaoRedirect
