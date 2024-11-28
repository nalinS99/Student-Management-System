import React from 'react'
import GLayout from '../GLayout'
import AddResult from '../AddResult'

function GoneAddResult() {
  return (
<div className="flex">
    <div className="basis-1/5">
    <GLayout 
    grade="Grade 01"/>
    </div>
    <div className="basis-4/5">
    <AddResult />
    </div>
</div>
  )
}

export default GoneAddResult