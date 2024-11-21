import React from 'react'
import GLayout from '../GLayout'
import AddSub from '../AddSub'

function GoneAddSub() {
  return (
    <div className="flex">
        <div className="basis-1/5">
        <GLayout 
        grade="Grade 01"
        link1="/GOne"
        link5="/GoneStd"/>
        </div>
        <AddSub/>
    </div>
  )
}

export default GoneAddSub