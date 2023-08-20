import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Gallery from './Gallery';
import LandingPage from './LandingPage';
import Posts from './Posts';
import Profile from './Profile';
import ProfileHomePage from './ProfileHomePage';
import ToDo from './ToDo';

const Allroutes = () => {
  return (
    <div>
      <Routes>
      
        <Route path='/' element={<LandingPage />} />

        
        <Route path='/profile/:userId' element={<ProfileHomePage />} />

       
        <Route path='/profile/:userId' element={<Profile />} />

     
        <Route path='/profile/posts' element={<Posts />} />

      
        <Route path='/profile/gallery' element={<Gallery />} />

       
        <Route path='/profile/todo' element={<ToDo />} />

       
        <Route
          path='*'
          element={
            <img
              style={{ margin: 'auto' }}
              src='https://cdn.dribbble.com/users/1804127/screenshots/10950170/media/296f886d1404ef9262002e14211cff6f.png?resize=1000x750&vertical=center'
              alt=''
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Allroutes;
