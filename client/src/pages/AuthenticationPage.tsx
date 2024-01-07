import { useState } from 'react'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import AuthenticationCoverLayer from '../components/AuthenticationCoverLayer'

const toggleSignUp = {
  title: 'Log In',
  text: 'Already have an account?',
  buttonText: 'SIGN IN' 
}

const toggleSignIn = {
  title: 'Create, Account!',
  text: 'Sign up if you still don\'t hava an account!',
  buttonText: 'SIGN UP' 
}

const AuthenticationPage = () => {

  const [isSignIn, setIsSignIn] = useState<boolean>(true)

  return (
    <div className='bg-bg-color h-screen w-screen'>
      <div className='flex items-center justify-center h-full w-full '>
        <div className='flex flex-row h-[80%] w-[60%]'>
          <SignIn />
          <SignUp />
          <AuthenticationCoverLayer isSignIn={isSignIn} toggle={setIsSignIn} content={isSignIn ? toggleSignIn : toggleSignUp}/>
        </div>
      </div>
    </div>
  )
}

export default AuthenticationPage