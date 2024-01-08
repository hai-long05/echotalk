import Sidenav from '../components/Sidenav'
import { useAuth } from '../context/AuthContext'

const HomePage = () => {

  return (
    <div className='w-screen h-screen flex flex-row bg-bg-color'>
      <Sidenav />

    </div>
  )
}

export default HomePage