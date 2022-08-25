import { Route, Routes as ReactRouterRoutes, BrowserRouter } from 'react-router-dom'

import Editor from './Editor'
import Home from './Home'
import MyPage from './MyPage/index'
import RollingPaper from './RollingPaper'
import SendError from './SendError'
import SendSuccess from './SendSuccess'
import ModalTest from './ModalTest/ModalTest'
import ModalCallTest from './ModalTest/ModalCallTest'
import KakaoRedirect from './KaKaoRedirect'

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/rollingpaper/*" element={<RollingPaper />} />
        <Route path="/sendSuccess" element={<SendSuccess />} />
        <Route path="/sendError" element={<SendError />} />
        <Route path="/modalTest" element={<ModalTest />} />
        <Route path="/modalCallTest" element={<ModalCallTest />} />
        <Route path="/kakao" element={<KakaoRedirect />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  )
}
