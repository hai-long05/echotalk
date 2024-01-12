import React, { useState } from 'react'
import Modal from 'react-modal'

type AddContactModalProps = {
  isOpen: boolean
}

const AddContactModal: React.FC<AddContactModalProps> = ({isOpen}) => {


  return (
    <Modal 
      isOpen={isOpen}
    >

    </Modal>
  )
}

export default AddContactModal