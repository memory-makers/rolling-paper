import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/app.scss'
import { Routes } from './pages/Routes'
import { ThemeProvider } from './store/theme'
import Layout from './components/layout/Layout'
import { PaperProvider } from './store/paper'

function App() {
  return (
    <ThemeProvider>
      <PaperProvider>
        <Layout>
          <Routes />
        </Layout>
      </PaperProvider>
    </ThemeProvider>
  )
}

export default App
