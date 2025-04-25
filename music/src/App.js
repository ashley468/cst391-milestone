import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AlbumList from './AlbumList';
import OneAlbum from './OneAlbum';
import About from './About';
import dataSource from './dataSource';
import NavBar from './NavBar';

const App = () => {
  const [albumList, setAlbumList] = useState([]);

  // Fetch album list from your data source
  useEffect(() => {
    const fetchAlbums = async () => {
      const albums = await dataSource.fetchAlbums();
      setAlbumList(albums);
    };
    fetchAlbums();
  }, []);

  const updateSingleAlbum = (id, navigate) => {
    console.log('Update Single Album = ', id);
    navigate('/show/' + id);
  };

  return (
    <Router>
      <NavBar />
      
      <h1 className="text-center"><u>Online Music Store</u></h1>
      

      <Routes>
        <Route
          exact
          path='/'
          element={<AlbumList albumList={albumList} updateSingleAlbum={updateSingleAlbum} />}
        />
        <Route
          exact
          path='/show/:albumId'
          element={<OneAlbum albumList={albumList} />}
        />
        <Route
          exact
          path='/about'
          element={<About />}
        />
      </Routes>
    </Router>
  );
};

export default App;
