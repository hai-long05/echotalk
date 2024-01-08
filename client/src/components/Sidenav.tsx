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
    <div className='w-[7%] h-full flex flex-col justify-center'>
      <div className='h-[90%] w-full flex flex-col bg-primary-color ml-7 items-center rounded-xl'>
        <div className='mb-10 mt-10'>
          placeholder
        </div>
        <FontAwesomeIcon icon={faHouse} size='xl' className='text-bg-color my-4'/>
        <FontAwesomeIcon icon={faRightFromBracket} size='xl' className='text-bg-color cursor-pointer my-4' onClick={handleLogOut}/>
      </div> 
    </div>
  )
}

export default Sidenav