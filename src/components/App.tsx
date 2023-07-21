import '../index.css'
import NavBar from './NavBar'
import HomePage from '../pages/HomePage'
import MediaPage from '../pages/MediaPage';

import { Routes, Route } from 'react-router-dom';

function App() {



  return (
    <>
    <div className='router'>
        <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/media" element={<MediaPage />} />
      </Routes>

    </div>
    </>
    
  )
}


export default App
