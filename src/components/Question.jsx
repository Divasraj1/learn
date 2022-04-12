import React from 'react'
import '../styles/Question.css'

const Question = () => {
  return (
    <div className='Section'>
       <div className='Rating'>
          <span>0 Votes</span>
          <span>0 Answer</span>
          <span>2 Views</span>
       </div>
       <div className='Question'>
          <p className='Question-title'>Store GPX file into MYSQL database in Java</p>
          <p className='Question-summary'> I'm trying to store the contents of a GPX file into a My SQL database as part of a Java Spring route sharing application I'm working on. I will use this data to generate maps displaying routes within</p>
          <div className='Question-bottom'>
             <div className='Tags'>
               <span className='Tag'>Java</span>
               <span className='Tag'>MySql</span>
               <span className='Tag'>Spring</span>
               <span className='Tag'>Gpx</span>
             </div>
             <div className='Info'>
                <p className='Username'>Laughing Coffin </p>
                <p className='Time'><strong>29 </strong> asked 23 min ago</p>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Question