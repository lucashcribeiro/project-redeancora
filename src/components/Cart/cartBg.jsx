import React from 'react'

export default function cartBg( {children, isTrue} ) {
    if(isTrue){
  return (
    <div className='h-72 bg-white pt-4 flex-col overflow-scroll'>
      {children}
    </div>
  )
}
else{
    return null
}
}
