import './index.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/sign-up';
import Feed from './pages/feed';
import Home from './pages/home';
import NotFound from './pages/not-found';
import MyProfile from './pages/my-profile';

/**
 * To add a route, simply page a component in the "pages" directory,
 * then add a <Route path="your-components-url" element={<MyAwesomeComponent />} />
 * inside of the Routes tag.
 */
function App() {
  return (
    <>
      <div className='p-4'>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='sign-up' element={<SignUp />} />
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
