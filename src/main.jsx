import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './styles/settings.scss'
import { RestaurantApp } from './restaurants/RestaurantApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RestaurantApp />
    </BrowserRouter>
  </React.StrictMode>
)
