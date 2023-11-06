import React from 'react'
import { BrowserRouter,Routes, Route, NavLink } from 'react-router-dom'
import Homelayout from './pages/layout/Homelayout'
import Assignmentlayout from './pages/layout/Assignmentlayout'
import Home from './Home'
import Solutionlayout from './pages/layout/Solutionlayout'
import Code from './pages/assignment/Code'
import Demo from './pages/assignment/Demo'
import Codejs from './pages/assignment/Jscode'
import Solution from './pages/components/Solution'
import Description from './pages/assignment/Description'
import '../server'


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homelayout/>}>
                <Route index element={<Home/>}/>
                <Route path="Assignment" element={<Assignmentlayout/>}>
                    <Route index element={<Solution/>}/>
                    <Route path="solution/:id" element={<Solutionlayout/>}>
                        <Route index element={<Description/>}/>
                        <Route path="code" element={<Code/>}>
                            <Route path="js" element={<Codejs/>}/>
                        </Route>
                        <Route path="demo" element={<Demo/>}/>
                   </Route>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
