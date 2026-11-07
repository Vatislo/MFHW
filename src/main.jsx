import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// приложение
import { App } from './App.jsx'
import './index.css'
import './style.css'

// или дз за 01.11.2026
// import { App } from './01.11.2026/main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
