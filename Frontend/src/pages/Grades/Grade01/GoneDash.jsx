import React from 'react'
import GLayout from '../GLayout'
import AddStudent from '../AddStudent'

function GoneDash() {
  return (
    <>
    <div className="flex">

    <div className=" basis-1/5 ">
    <GLayout link2="/GoneAddSub" />
    </div>
    <AddStudent/>
    </div>
     
    </>
  
  )
}

export default GoneDash