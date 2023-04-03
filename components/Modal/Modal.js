import React from 'react'

const Modal = ({onClose = () => null}) => {
  return (
    <div>
        Modal
        <button onClick={() => onClose(false)}>
            Close
        </button>
    </div>
  )
}

export default Modal