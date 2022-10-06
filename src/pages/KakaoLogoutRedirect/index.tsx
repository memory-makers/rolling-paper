import React, { useEffect } from 'react'
import tokenStore from '@/api/tokenStore'

const KakaoLogoutRedirect = () => {
  useEffect(() => {
    tokenStore.clearToken()
    window.location.replace('/')
    return
  }, [])

  return <></>
}

export default KakaoLogoutRedirect
