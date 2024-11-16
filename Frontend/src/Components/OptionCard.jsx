import React from 'react'

function OptionCard(props) {
  return (
    <div className='h-32 w-16 bg-primary text-white '>
        <h1 className='align-middle justify-center'> {props.name}</h1>
    </div>
  )
}

export default OptionCard