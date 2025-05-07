import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './routes/router.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.tsx'
import { UserContext } from './context/UserContext.tsx'
import { SnackbarProvider } from 'notistack'

import 'animate.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <UserContext>
        <BrowserRouter>
          <SnackbarProvider maxSnack={3}>
              <Router />
          </SnackbarProvider>
        </BrowserRouter>
      </UserContext>
    </AuthProvider>
  </StrictMode>,
)