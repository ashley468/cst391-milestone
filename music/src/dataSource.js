const fetchAlbums = async () => {
    return [
      {
        id: 1,
        title: 'Guitar',
        description: 'This is a martin brand from model D-28',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Martin_D-28_body_left_%282011-01-02_by_irish10567%29.jpg/500px-Martin_D-28_body_left_%282011-01-02_by_irish10567%29.jpg'
      },
      {
        id: 2,
        title: 'Drum Kit',
        description: 'This is a Tama brand from model Imperialstar',
        image: 'https://media.sweetwater.com/m/products/image/9809f98839qslLELphvWcTHYfPhlerwnSEVzbPd6.jpg?quality=82&width=750&ha=9809f98839fb8254'
      },
      {
        id: 3,
        title: 'Violin',
        description: 'This is a Yamaha brand from model AV7',
        image: 'https://media.sweetwater.com/m/products/image/768f8c9db3aCZQdmb5RUr7wMBw9Mz8XFpPB2t4Kz.jpg?quality=82&height=750&ha=768f8c9db35b38d7'
      },
    ];
  };
  
  const dataSource = {
    fetchAlbums,
  };
  
  export default dataSource;
  