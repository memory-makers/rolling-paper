import { Route, Routes as ReactRouterRoutes, BrowserRouter } from 'react-router-dom'

import Editor from './Editor'
import Home from './Home'
import MyPage from './MyPage/index'
import RollingPaper from './RollingPaper'
import ModalTest from './ModalTest/ModalTest'
import ModalCallTest from './ModalTest/ModalCallTest'
import Sending from './Sending/Sending'
import KakaoRedirect from './KakaoRedirect'

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/rollingpaper/:rollingPaperId" element={<RollingPaper />}></Route>
        <Route path="/sending" element={<Sending />} />
        <Route path="/modalTest" element={<ModalTest />} />
        <Route path="/modalCallTest" element={<ModalCallTest />} />
        <Route path="/kakao" element={<KakaoRedirect />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  )
}
