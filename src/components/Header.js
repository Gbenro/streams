import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

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
      </div>
    </BrowserRouter>
  )
}

export default Header
