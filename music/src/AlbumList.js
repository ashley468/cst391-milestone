import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const AlbumList = (props) => {
  const navigate = useNavigate();

  const handleSelectionOne = (albumId) => {
    console.log('Selected ID is ' + albumId);
    props.updateSingleAlbum(albumId, navigate); // Calling updateSingleAlbum with the navigate function
  };

  const albums = props.albumList.map((album) => {
    return (
      <Card
        key={album.id}
        albumId={album.id}
        albumTitle={album.title}
        albumDescription={album.description}
        buttonText="OK"
        imgURL={album.image}
        onClick={() => handleSelectionOne(album.id)} // Trigger handleSelectionOne onClick
      />
    );
  });

  return <div className='container'>{albums}</div>;
};

export default AlbumList;
