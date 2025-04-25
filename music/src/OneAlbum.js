import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const OneAlbum = (props) => {
  const { albumId } = useParams(); // Get albumId from the URL
  const album = props.albumList.find(album => album.id === parseInt(albumId)); // Find the specific album

  const [message, setMessage] = useState('');

  if (!album) {
    return <div>Instrument not found</div>;
  }

  const addInstrument = () => {
    setMessage(`You added "${album.title}" to your collection!`);
  };

  const deleteInstrument = () => {
    setMessage(`You deleted "${album.title}" from your collection!`);
  };

  const editInstrument = () => {
    setMessage(`You edited "${album.title}" from your collection!`);
  };

  return (
    <div className='container'>
      <h2>Instrument Details for {album.title}</h2>
      <div className='row'>
        <div className='col col-sm-3'>
          <div className='card'>
            <img src={album.image} className='card-img-top' alt={album.title} />
            <div className='card-body'>
              <h5 className='card-title'>{album.title}</h5>
              <p className='card-text'>{album.description}</p>
              <div className='list-group'>
                <li>This is instrument</li>
              </div>
              
              {/* Buttons */}
              <button onClick={editInstrument} className='btn btn-primary'>
                Edit
              </button>
              <br /><br />
              <button onClick={deleteInstrument} className='btn btn-danger'>
                Delete
              </button>
              <br /><br />
              <button onClick={addInstrument} className='btn btn-success'>
                Add
              </button>

              {/* Message display */}
              {message && (
                <div className='alert alert-info mt-3' role='alert'>
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneAlbum;
