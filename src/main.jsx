import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Portfolio } from './app/app';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio/>
  </StrictMode>,
)
