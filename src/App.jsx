import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Routes>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/Login' element={<Home></Home>}></Route>


      </Routes>
    </>
  )
}

export default App
