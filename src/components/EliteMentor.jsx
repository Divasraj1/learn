import React from 'react'
import EliteMentorBox from './EliteMentorBox'
import "../styles/EliteMentor.css"
const EliteMentor = () => {
  return (
    <div className='container'>
        {/* <h2 className='emtitle'>Elite Mentor</h2> */}
        <EliteMentorBox/>
        <EliteMentorBox/>
        <EliteMentorBox/>
    </div>
  )
}

export default EliteMentor