import { Route, Routes as ReactRouterRoutes, BrowserRouter } from 'react-router-dom'

import Editor from './Editor'
import Home from './Home'
import MyPage from './MyPage/index'
import RollingPaper from './RollingPaper'
import ModalTest from './ModalTest/ModalTest'
import ModalCallTest from './ModalTest/ModalCallTest'
import Sending from './Sending/Sending'
import KakaoRedirect from './KakaoRedirect'
import NotFound from './ErrorHandling/NotFound'
import NotLogin from './ErrorHandling/NotLogin'
import tokenStore from '@/api/tokenStore'

export const Routes = () => {
  const token = tokenStore.getAccessToken()

  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="rollingpaper">
          <Route path=":rollingPaperId" element={<RollingPaper />} />
          <Route path=":rollingPaperId/editor" element={<Editor />} />
        </Route>
        <Route path="sending" element={<Sending />} />
        <Route path="modalTest" element={<ModalTest />} />
        <Route path="modalCallTest" element={<ModalCallTest />} />
        <Route path="kakao" element={<KakaoRedirect />} />
        <Route path="/mypage" element={token ? <MyPage /> : <NotLogin />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/not-found" element={<NotFound />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  )
}
