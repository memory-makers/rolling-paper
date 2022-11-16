import { BrowserRouter } from 'react-router-dom'
import './styles/app.scss'
import { Routes } from './pages/Routes'
import Layout from './components/layout/Layout'
import { ThemeProvider } from './store/theme'
import { PaperProvider } from './store/paper'
import { NameProvider } from './store/nickname'
import { UrlNameProvider } from './store/urlNickname'
import { RollingPaperProvider } from './store/rollingpaper'

function App() {
  return (
    <ThemeProvider>
      <NameProvider>
        <UrlNameProvider>
          <PaperProvider>
            <RollingPaperProvider>
              <Layout>
                <BrowserRouter>
                  <Routes />
                </BrowserRouter>
              </Layout>
            </RollingPaperProvider>
          </PaperProvider>
        </UrlNameProvider>
      </NameProvider>
    </ThemeProvider>
  )
}

export default App
