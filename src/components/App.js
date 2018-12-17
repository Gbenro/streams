import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const PageOne = () => {
  return (
    <div>
      Page 1<Link to='/pagetwo'>go to page2</Link>
    </div>
  )
}
const PageTwo = () => {
  return (
    <div>
      Page 2<button> Click Me</button>
      <Link to='/'>go to page1</Link>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path='/' exact component={PageOne} />
        <Route path='/pagetwo' component={PageTwo} />
      </div>
    </BrowserRouter>
  )
}

export default App
