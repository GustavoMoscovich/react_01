import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Messages = (msg) => {

    console.log(msg)
    const showmsg = () => {toast.success( msg , {position: toast.POSITION.TOP_LEFT })}

  return (
    <div>
      {showmsg()}
      <ToastContainer />
    </div>
  )
}

export default Messages
