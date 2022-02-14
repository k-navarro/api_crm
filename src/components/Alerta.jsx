import React from 'react'

const Alerta = ({children}) => {
  return (
    <div className='text-center my-3 text-red-600 font-bold p-3 uppercase'>
      {children}
    </div>
  )
}

export default Alerta
