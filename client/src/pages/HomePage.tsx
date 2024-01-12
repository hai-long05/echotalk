import { useState } from 'react';
import Contacts from '../components/Contacts'
import Sidenav from '../components/Sidenav'
import AddContactModal from '../components/AddContactModal';

const HomePage = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='w-screen h-screen flex flex-row bg-bg-color'>
      <Sidenav  setIsOpen={setIsOpen}/>
      <Contacts />
      <AddContactModal isOpen={isOpen}/>
    </div>
  )
}

export default HomePage