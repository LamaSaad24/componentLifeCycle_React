import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Contact from './component/Contact'
import About from './component/About'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </>
  )
}

export default App
