import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AuthProvider from './context/AuthContext'
import AuthenticationPage from './pages/AuthenticationPage'
import ProtectedRoute from './utils/ProtectedRoute'
import HomePage from './pages/HomePage'

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/auth' element={<AuthenticationPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/home' element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
