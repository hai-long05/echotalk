import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogOut = async() => {
    await auth?.logOut()
    navigate('/auth')
  }

  return (
    <div className='w-screen h-screen bg-red-100'>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  )
}

export default HomePage