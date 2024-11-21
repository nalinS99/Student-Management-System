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
    link2="/GoneAddSub"
    link5="/GoneStd" />
    </div>
    <AddStudent GradeID ="GD1"/>
    </div>
     
    </>
  
  )
}

export default GoneDash