import React, { useEffect } from 'react'
import tokenStore, { Token } from '@/api/tokenStore'

const KakaoRedirect = () => {
  const token: Token = new URL(window.location.href).searchParams.get('code') || undefined

  useEffect(() => {
    if (!token) {
      window.location.replace('/')
    }

    tokenStore.setAccessToken(token)
    window.location.replace('/mypage')
  }, [])

  return <></>
}

export default KakaoRedirect
