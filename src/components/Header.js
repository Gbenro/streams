import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header = () => {
  return (
    <BrowserRouter>
      <div className='ui seconday pointing menu '>
        <Link to='/' className='item'>
          Streammy
        </Link>
        <div className='right menu' />
        <Link to='/' className='item'>
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </BrowserRouter>
  )
}

export default Header
