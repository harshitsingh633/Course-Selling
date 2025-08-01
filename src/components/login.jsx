import React, { useState } from 'react'

const Login = () => {
  const [username , setUsername ] =  useState();
  const [password , setPassword ] =  useState();


  return (
    <div className='flex justify-center items-center bg-gray-100 min-h-screen'>
      <div className='bg-purple-200 max-w-sm w-full'>
        <h1 className='text-2xl flex justify-center'>Welcome Back</h1>
        <form >
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-600'>Username</label>
            <input type="text"
              value={username}
              required
              className='mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
          </div>
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-600'>Password</label>
            <input type="text" 
            required
            value={password} 
            className='mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
          </div>
          <button className='w-full py-2 bg-indigo-200 text-white rounded-lg hover:bg-indigo focus:outline-none focus:ring-2 focus:ring-indigo-500' type='submit'>Login</button>
        </form>
      </div>
       
    </div>
  )
}

export default Login;