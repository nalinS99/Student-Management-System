import React from 'react'
import GLayout from '../GLayout'
import AddStudent from '../AddStudent'

function GoneDash() {
  return (
    <>
    <div className="flex">

    <div className=" basis-1/5 ">
    <GLayout 
    grade="Grade 01"
    link5="/GoneStd" 
    link3 ="/GOneAddRes"/>
    </div>
    <AddStudent GradeID ="GD1"/>
    </div>
     
    </>
  
  )
}

export default GoneDash