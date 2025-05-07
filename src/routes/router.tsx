
import { Navigate, Route, Routes } from 'react-router'
// import Leitor from '../pages/Leitor/Leitor'
import App from '../pages/App/App'
import Login from '../pages/Login/Login'
import ProtectedRouter from './protectedRouter'
import Searches from '../pages/Searches/Searches'
import CompareBC from '../pages/CompareBC/CompareBC'
import AutoLoginThird from '../pages/AutoLoginThird/AutoLoginThird'
// import Redirect from '../pages/Callback/Callback'
import User from '../pages/User/User'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Navigate to="/login" />} />
            <Route path='*' element={<Navigate to="/login" />} />
            <Route path='' element={<App />} >
              <Route path='/login' element={<Login />} />
              <Route element={<ProtectedRouter />}>
                {/* <Route path="/reader-discontinued" element={<Leitor />}/> */}
                <Route path="/reader" element={<CompareBC />}/>
                <Route path="/searches" element={<Searches />}/>
                <Route path="/aplication" element={<AutoLoginThird />}/>
                {/* <Route path="/callback" element={<Redirect />}/> */}
                <Route path="/conta" element={<User />} />
              </Route>
            </Route>
        </Routes>
    </div>
  )
}

export default Router