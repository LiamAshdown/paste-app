import React, { useReducer, useContext, createContext } from 'react'

// Create a context to share the modal state and dispatch across components
const ModalContext = createContext()

// Initial state for the modal
const initialModalState = {
  isOpen: false,
  Content: null,
}

// Modal reducer function to manage the modal state
const modalReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { isOpen: true, Content: action.Content, meta: action.meta }
    case 'CLOSE_MODAL':
      return {
        ...state,
        isOpen: false
      }
    default:
      return state
  }
}

export const ModalProvider = ({ children }) => {
  const [modalState, dispatch] = useReducer(modalReducer, initialModalState)

  return (
    <ModalContext.Provider value={{ modalState, dispatch }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  return useContext(ModalContext)
}
