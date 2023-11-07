import React from 'react'
import { useParams,Link,Outlet, NavLink } from 'react-router-dom'


export default function Solutionlayout() {
  const [ans,setAns]=React.useState([])
  const {id}=useParams()
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",            
    color: "#161616"
}
  React.useEffect(()=>{
    fetch(`/api/Assignment/solution/${id}`)
    .then(req=>req.json())
    .then(data=>setAns(data.solutions))
  },[])

  if(!ans){
    return <h1>...loading</h1>
  }
  return (
    <div>
      <span className='logo'>⬅️ </span>
        <Link to=".."
          className='back-button'
          >
            <span> Back to all solutions</span></Link>
        <section className='description container-des'>
            <div className='answer'>
                <div className='container-sol '>
                  <h4>Time complexity:</h4>
                  <h4>{ans.name}</h4>
                  <div className='answer-des'>
                    <h6>a-amount</h6>
                    <h6>c-coins</h6>
                  </div>
                </div>
                <div className='container-sol ' >
                  <h4>Description:</h4>
                  <h6 className='text'>{ans.text}</h6>
                </div>  
                 
            </div>
            <nav className='container-nav'>
                <NavLink to="."
                end
                style={({ isActive }) => isActive ? activeStyles : null}
                >
                  Steps
                </NavLink>
                <NavLink
                to="code"
                style={({ isActive }) => isActive ? activeStyles : null}>
                  Code  
                </NavLink>
                <NavLink to="demo"
                style={({ isActive }) => isActive ? activeStyles : null}>
                  Try it out
                </NavLink>
              </nav>
            <Outlet context={{ans}}/>
        </section>
    </div>
  )
}
