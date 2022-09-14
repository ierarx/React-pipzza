import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './scss/app.scss'

import Header from './components/Header'
import Home from './pages/Home'
import CartEmpty from './pages/CartEmpty'
import CartFull from './pages/CartFull'

// export const SearchContext = React.createContext()

function App() {
    // const [searchValue, setSearchValue] = React.useState('')
    return (
        <div className="wrapper">
            <Header />

            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Cart" element={<CartFull />} />
                        <Route path="*" element={<CartEmpty />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App
