import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Admin from './pages/Admin'
import Home from './pages/Home'
import User from './pages/User'
import NotFound from './pages/NotFound'
import { PersonContextProvider } from './Context/PersonProvider';


function App() {

  return (
    <div className="bg-cyan-300 ">
    <Navbar/>
    <div className='container mx-auto py-4 px-20'>
    <PersonContextProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      </PersonContextProvider>
    </div>
  </div>
    
  
      
  )
}

export default App
