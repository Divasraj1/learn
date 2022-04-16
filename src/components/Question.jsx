import React from 'react'
import '../styles/Question.css'

const Question = (props) => {
  return (
    <div className='Section'>
       <div className='Rating'>
          <span>0 Votes</span>
          <span>0 Answer</span>
          <span>2 Views</span>
       </div>
       <div className='Question'>
          <p className='Question-title'>{props.title}</p>
          <p className='Question-summary'>{props.summary}</p>
          <div className='Question-bottom'>
             <div className='Tags'>
               <span className='Tag'>{props.tag1}</span>
               <span className='Tag'>{props.tag2}</span>
               <span className='Tag'>{props.tag3}</span>
               <span className='Tag'>{props.tag4}</span>
             </div>
             <div className='Info'>
                <p className='Username'>{props.username} </p>
                <p className='Time'><strong>29 </strong> asked 23 min ago</p>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Question