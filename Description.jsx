import React from 'react'
import { useOutletContext } from 'react-router-dom'
import  Typewriter  from 'typewriter-effect'

export default function Description() {
  const {ans}=useOutletContext()
  return (
    <div className='preview'>
      <span className='code-box'>Min Pseudo x</span>
      {ans.description ?(<pre>
        <code><Typewriter  onInit={(typewriter)=> { typewriter
      .typeString(`${ans.description}`).start();
  }}
  options={{delay:1,cursor:'  <',}}
        /></code></pre>):(<p style={{marginTop:'1em'}}>...loading</p>)}
      
    </div>
  )
}
