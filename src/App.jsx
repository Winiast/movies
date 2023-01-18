import React from 'react'
import { createRoot } from 'react-dom/client'

import Header from './components/Header'
import Movies from './components/Movies'

const App = () => {
  return (
    <div>
      <Header />
      <Movies />
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(React.createElement(App))
