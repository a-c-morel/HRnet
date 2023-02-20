import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Header from './components/Header'

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
