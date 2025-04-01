import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./main.css"

createRoot(document.getElementById('root')).render(
  <>
    <App className={'z-index-high'}/>
    <App className={'z-index-low'} />
  </>
)
