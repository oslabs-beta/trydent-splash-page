import '../index.css'
import NavBar from './NavBar'
import HomePage from '../pages/HomePage'
import MediaPage from '../pages/MediaPage';

import { Routes, Route } from 'react-router-dom';

function App() {



  return (
    <>
    <main className='router'>
        <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/media" element={<MediaPage />} />
      </Routes>

    </main>
    </>
    
  )
}


export default App
