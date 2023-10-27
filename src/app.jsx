import './index.css';
import { Route, Routes } from 'react-router-dom';
import Authentication from './pages/authentication';
import Feed from './pages/feed';
import Home from './pages/home';
import NotFound from './pages/not-found';
import MyProfile from './pages/my-profile';

function App() {
  return (
    <>
      <div className='p-4'>
        <Routes>
          <Route path='/' element={<Authentication />} />
          <Route path='feed' element={<Feed />} />
          <Route path='home' element={<Home />} />
          <Route path='my-profile' element={<MyProfile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
