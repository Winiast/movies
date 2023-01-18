import React from 'react'
import { createRoot } from 'react-dom/client'

import Header from './components/Header'
import Movies from './components/Movies'

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <Header />
        <Movies />
      </div>
    </React.StrictMode>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(React.createElement(App))
