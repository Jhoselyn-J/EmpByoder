import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Admin from './pages/Admin'
import Home from './pages/Home'
import User from './pages/User'
import NotFound from './pages/NotFound'


function App() {

  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}
export default App
