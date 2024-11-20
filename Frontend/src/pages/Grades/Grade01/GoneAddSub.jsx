import React from 'react'
import GLayout from '../GLayout'
import AddSub from '../AddSub'

function GoneAddSub() {
  return (
    <div className="flex">
        <div className="basis-1/5">
        <GLayout link1="/GOne"/>
        </div>
        <AddSub/>
    </div>
  )
}

export default GoneAddSub