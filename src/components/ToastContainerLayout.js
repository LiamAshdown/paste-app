'use client'

import { ToastContainer, toast } from 'react-toastify'
import { useTheme } from 'next-themes'

const ToastContainerLayout = () => {
  const { theme } = useTheme()

  return (
    <ToastContainer
      position={toast.POSITION.TOP_RIGHT}
      autoClose={2000}
      newestOnTop={true}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
    />
  )
}

export default ToastContainerLayout
