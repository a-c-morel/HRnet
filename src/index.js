import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import Header from './components/Header'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <div className='employee-creation'>
                <Header />
                <App />
            </div>
        </React.StrictMode>
  </BrowserRouter>
)
