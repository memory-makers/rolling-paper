import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/app.scss'
import { Routes } from './pages/Routes'
import { ThemeProvider } from './store/theme'
import Layout from './components/layout/Layout'
import { PaperProvider } from './store/paper'
import { NameProvider } from './store/nickname'

function App() {
  return (
    <ThemeProvider>
      <NameProvider>
        <PaperProvider>
          <Layout>
            <Routes />
          </Layout>
        </PaperProvider>
      </NameProvider>
    </ThemeProvider>
  )
}

export default App
