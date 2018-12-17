import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header'

const App = () => {
  return (
    <div className='ui container '>
      <Header />
      <BrowserRouter>
        <div>
          <Route path='/' exact component={StreamShow} />
          <Route path='/streams/new' component={StreamCreate} />
          <Route path='/streams/Edit' component={StreamEdit} />
          <Route path='/streams/delete' component={StreamDelete} />
          <Route path='/streams/show' component={StreamList} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
