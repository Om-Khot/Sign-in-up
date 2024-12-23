import { useState } from 'react'
import './App.css'
import LoginCard from './Components/Card/SignInCardCompo'
import SignUpCard from './Components/Card/SignUpCardCompo'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'

function App() {

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signin' element={<LoginCard title={"Sign in"}/>}/>
        <Route path='/signup' element={<SignUpCard title={"Sign Up"}/>}/>
      </Routes>
    </div>
    
  )
}

export default App