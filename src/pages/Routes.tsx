import { Route, Routes as ReactRouterRoutes, BrowserRouter } from 'react-router-dom'

import Editor from './Editor'
import Home from './Home'
import MyPage from './MyPage/index'
import RollingPaper from './RollingPaper'
import SendError from './SendError'
import SendSuccess from './SendSuccess'
import ModalTest from './ModalTest/ModalTest'
import ModalCallTest from './ModalTest/ModalCallTest'
import Sending from './Sending/Sending'

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
        <Route path="/sending" element={<Sending isSuccess={false} nickname="레몬은 귀여워" />} />
        <Route path="/modalTest" element={<ModalTest />} />
        <Route path="/modalCallTest" element={<ModalCallTest />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  )
}
