import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-6xl px-2  md:px-0'>
      {children}
    </div>
  )
}

export default Container;
