import { useEffect } from 'react'
import { Route, Routes as ReactRouterRoutes } from 'react-router-dom'

import Editor from './Editor'
import Home from './Home'
import MyPage from './MyPage/index'
import RollingPaper from './RollingPaper/RollingPaper'
import Sending from './Sending/Sending'
import KakaoLoginRedirect from './KakaoLoginRedirect'
import KakaoLogoutRedirect from './KakaoLogoutRedirect'
import NotFound from './ErrorHandling/NotFound'
import NotLogin from './ErrorHandling/NotLogin'
import tokenStore from '@/api/tokenStore'
import NotPermission from './ErrorHandling/NotPermission'
import { useAdBlockDetect, useGA } from '@/hooks'
import SettingRoll from './SettingRoll'

export const Routes = () => {
  const token = tokenStore.getAccessToken()
  const { initializeGA } = useGA()
  const adLayout = useAdBlockDetect()
  useEffect(() => {
    initializeGA()
  }, [])

  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/mypage" element={token ? <MyPage /> : <NotLogin />} />
      <Route path="/rollingpaper" element={adLayout}>
        <Route path=":rollingPaperId" element={<RollingPaper />} />
        <Route path=":rollingPaperId/editor" element={<Editor />} />
      </Route>
      <Route path="/sending" element={adLayout}>
        <Route path="" element={<Sending />} />
      </Route>
      <Route path="kakao" element={<KakaoLoginRedirect />} />
      <Route path="logout" element={<KakaoLogoutRedirect />} />
      <Route path="setting" element={<SettingRoll />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/not-permission" element={<NotPermission />} />
    </ReactRouterRoutes>
  )
}
