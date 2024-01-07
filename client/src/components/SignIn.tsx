import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const auth = useAuth();
  const navigate = useNavigate()

  const handleSubmit = async() => {
    try {
      await auth?.logIn(emailRef.current!.value, passwordRef.current!.value)
      navigate('/home')
    } catch (e) {
      console.log('Failed to log in: ', e)
    }
  }

  return (
    <div className='w-[50%] bg-bg-white-color flex items-center rounded-s-[60px] flex-col'>
      <h1 className='font-semibold text-5xl mb-6 mt-14'>Sign In</h1>
      <div className='flex justify-around w-[40%] mb-4'>
        <a href="">
          <FontAwesomeIcon icon={faGoogle} className='border-2 rounded-full border-primary-color p-3'/> 
        </a>
        <a href="">
          <FontAwesomeIcon icon={faFacebook} className='border-2 rounded-full border-primary-color p-3'/> 
        </a>
        <a href="">
          <FontAwesomeIcon icon={faApple} className='border-2 rounded-full border-primary-color p-3'/> 
        </a>
      </div>
      <p className='mb-5'>Or sign in using E-Mail-Address</p>
      <input type="text" ref={emailRef} placeholder='E-Mail' className='bg-[#f1f0ec] pl-4 w-[60%] h-[8%] rounded-3xl my-2 text-[#030303] font-medium'/>
      <input type="text" ref={passwordRef} placeholder='Password' className='bg-[#f1f0ec] pl-4 w-[60%] h-[8%] rounded-3xl my-2 text-[#030303] font-medium'/>
      <p className='mt-4'>Forgot your password? Reset it <a href="">here</a></p>
      <button className='bg-primary-color w-40 mt-7 h-12 rounded-3xl font-medium text-bg-white-color' onClick={handleSubmit}>Sign In</button>
    </div>
  )
}

export default SignIn