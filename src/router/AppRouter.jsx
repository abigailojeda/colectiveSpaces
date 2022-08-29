import { Route, Routes } from 'react-router-dom'
import { Footer } from '../auth/pages/Footer'
import { Home } from '../auth/pages/Home'
import { Nav } from '../auth/pages/Nav'
import { Cafe } from '../restaurants/pages/Cafe'
import { Restaurant } from '../restaurants/pages/Restaurant'

export const AppRouter = () => {
    return (
        <>
            <Nav/>
            <Routes>
                <Route path='cafe' element={<Home/>} />
                <Route path='restaurant' element={<Restaurant/>} />
                <Route path='/' element={<Cafe/>} />
            </Routes>
            <Footer/>
        </>
    )
}
