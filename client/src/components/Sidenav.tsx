import { faHouse, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Sidenav = () => {

  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogOut = async() => {
    await auth?.logOut()
    navigate('/auth')
  }
  
  return (
    <div className='w-[7%] h-full flex flex-col items-center bg-[#323946]'>
      <img src='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' alt='' className='mt-10 mb-10 w-14 rounded-full' />
      <FontAwesomeIcon icon={faHouse} size='xl' className='text-primary-color my-4'/>
      <FontAwesomeIcon icon={faRightFromBracket} size='xl' className='text-primary-color cursor-pointer my-4' onClick={handleLogOut}/>
    </div>
  )
}

export default Sidenav