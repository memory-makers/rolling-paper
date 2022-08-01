import { Route, Routes as ReactRouterRoutes, BrowserRouter } from 'react-router-dom'

import Editor from './Editor'
import Home from './Home'
import MyPage from './MyPage'
import RollingPaper from './RollingPaper'
import SendError from './SendError'
import SendSuccess from './SendSuccess'
import ModalTest from './ModalTest/ModalTest'
import ModalCallTest from './ModalTest/ModalCallTest'

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
      </ReactRouterRoutes>
    </BrowserRouter>
  )
}
