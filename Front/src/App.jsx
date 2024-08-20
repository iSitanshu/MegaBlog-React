import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authService from './appwrite/auth'
import {Header, Footer} from './components/index'
import './App.css'
import { login, logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const state = useSelector(state => state.counter.userData)
  console.log(state);
  

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() =>  setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO:
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>)
  : null
}

export default App
