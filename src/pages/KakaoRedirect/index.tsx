import React, { useEffect } from 'react'
import tokenStore, { Token } from '@/api/tokenStore'

const KakaoRedirect = () => {
  const token: Token = new URL(window.location.href).searchParams.get('token') || undefined

  useEffect(() => {
    if (!token) {
      window.location.replace('/')
      return
    }

    tokenStore.setAccessToken(token)
    window.location.replace('/mypage')
    return
  }, [])

  return <></>
}

export default KakaoRedirect
