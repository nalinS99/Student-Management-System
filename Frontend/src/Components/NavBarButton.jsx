import React from 'react'

function NavBarButton(props) {
  return (
    <div>
       <button className='w-48 h-20'>
        {props.name}
       </button>
    </div>
  )
}

export default NavBarButton