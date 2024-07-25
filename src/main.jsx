import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GodotEngineProvider } from './Context/godotContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GodotEngineProvider>
    <App />
  </GodotEngineProvider>,
  </React.StrictMode>,
)
