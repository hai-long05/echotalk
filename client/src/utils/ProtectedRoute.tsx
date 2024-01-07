import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

  const auth = useAuth()

  if (!auth?.currentUser) return <Navigate to='/auth' replace />

  return <Outlet />
}

export default ProtectedRoute