import { Route, Routes as ReactRouterRoutes, BrowserRouter } from 'react-router-dom'

import Editor from './Editor'
import Home from './Home'
import MyPage from './MyPage/index'
import RollingPaper from './RollingPaper'
import ModalTest from './ModalTest/ModalTest'
import ModalCallTest from './ModalTest/ModalCallTest'
import Sending from './Sending/Sending'
import KakaoLoginRedirect from './KakaoLoginRedirect'
import KakaoLogoutRedirect from './KakaoLogoutRedirect'
import NotFound from './ErrorHandling/NotFound'
import NotLogin from './ErrorHandling/NotLogin'
import tokenStore from '@/api/tokenStore'

export const Routes = () => {
  const token = tokenStore.getAccessToken()

  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/rollingpaper/:rollingPaperId" element={<RollingPaper />} />
        <Route path="/rollingpaper/:rollingPaperId/editor" element={<Editor />} />
        <Route path="sending" element={<Sending />} />
        <Route path="modalTest" element={<ModalTest />} />
        <Route path="modalCallTest" element={<ModalCallTest />} />
        <Route path="kakao" element={<KakaoLoginRedirect />} />
        <Route path="/mypage" element={token ? <MyPage /> : <NotLogin />} />
        <Route path="logout" element={<KakaoLogoutRedirect />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/not-found" element={<NotFound />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  )
}
