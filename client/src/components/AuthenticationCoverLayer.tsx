import React from 'react'

type AuthenticationCoverLayerProps = {
  isSignIn: boolean
  toggle: React.Dispatch<React.SetStateAction<boolean>>
  content: {
    title: string
    text: string
    buttonText: string
  }
}

const AuthenticationCoverLayer: React.FC<AuthenticationCoverLayerProps> = ({isSignIn, toggle, content}) => {


  return (
    <div className={'flex flex-col absolute h-[80%] w-[30%] bg-primary-color z-10 justify-center items-center ' + (isSignIn ? 'animate-slide-right rounded-e-[60px]' : 'animate-slide-left rounded-s-[60px]')}>
      <h1 className='font-bold text-3xl text-bg-white-color mb-6'>{content.title}</h1>
      <p className='text-bg-white-color mb-6'>{content.text}</p>
      <button className='border-2 border-bg-white-color w-40 h-12 rounded-3xl font-medium text-bg-white-color'
              onClick={() => toggle((prev) => {
                return !prev
      })}>{content.buttonText}</button>
    </div>
  )
}

export default AuthenticationCoverLayer