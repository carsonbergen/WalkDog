import './index.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/sign-up';
import Feed from './pages/feed';
import Walk from './pages/walk';
import NotFound from './pages/not-found';
import MyProfile from './pages/my-profile';
import Page from './components/Page';
import Testing from './pages/testing';
import PhotoPreview from './pages/photo-preview';

/**
 * To add a route, simply page a component in the "pages" directory,
 * then add a <Route path="your-components-url" element={<MyAwesomeComponent />} />
 * inside of the Routes tag.
 */
function App() {
  return (
    <>
      <div className='font-nunito'>
        <Routes>
          <Route 
            path='/' 
            element={
              <Page title="">
                <SignUp />
              </Page>
            } 
          />
          <Route 
            path='login' 
            element={
              <Page title="">
                <Login />
              </Page>
            } 
          />
          <Route 
            path='feed' 
            element={
              <Page title="Feed">
                <Feed />
              </Page>
            } 
          />
          <Route 
            path='walk' 
            element={
              <Walk />
            } 
          />
          <Route
            path='photo-preview' 
            element={
              <Page title="Image Preview">
                <PhotoPreview />
              </Page>
            } 
          />
          <Route 
            path='my-profile' 
            element={
              <Page title="My Profile">
                <MyProfile />
              </Page>
            } 
          />
          <Route 
            path='*' 
            element={
              <Page title="404 Not Found!">
                <NotFound />
              </Page>
            } 
          />
          {/* Testing stuff */}
          <Route
            path='testing'
            element= {
              <Page title="Testing">
                <Testing />
              </Page>
            }
          />
        </Routes>
      </div>
    </>
  )
}

export default App
