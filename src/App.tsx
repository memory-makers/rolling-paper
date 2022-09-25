import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/app.scss'
import { Routes } from './pages/Routes'
import { ThemeProvider } from './store/theme'
import Layout from './components/layout/Layout'
import { PaperProvider } from './store/paper'
import { NameProvider } from './store/nickname'
import { UrlNameProvider } from './store/urlNickname'

function App() {
  return (
    <ThemeProvider>
      <NameProvider>
        <UrlNameProvider>
          <PaperProvider>
            <Layout>
              <Routes />
            </Layout>
          </PaperProvider>
        </UrlNameProvider>
      </NameProvider>
    </ThemeProvider>
  )
}

export default App
