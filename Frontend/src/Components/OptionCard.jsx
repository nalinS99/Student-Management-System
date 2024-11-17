import React from 'react';


function OptionCard(props) {
  return (
    <div className='h-72 w-60 bg-primary text-white basis-1/3  rounded-md text-2xl content-center'>
        <h1 className='text-center'> {props.name}</h1>
    </div>
  )
}

export default OptionCard