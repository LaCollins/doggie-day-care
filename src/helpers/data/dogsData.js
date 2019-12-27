const dogs = [
  {
    id: 'dog1',
    imageUrl: 'https://kidzshowz.files.wordpress.com/2012/12/wishbone-jack-russell-tv-show.jpg',
    name: 'Wishbone',
    owner: 'Joe Talbot',
    description: 'Cute little Jack Russell Terrier with an affinity for literature.',
  },
  {
    id: 'dog2',
    imageUrl: 'https://musicart.xboxlive.com/6/cfbd7b5b-0000-0000-0000-000000000009/504/image.jpg?w=1920&h=1080',
    name: 'Old Yeller',
    owner: 'Travis Coates',
    description: 'Sweet yellow lab. May have rabies.',
  },
  {
    id: 'dog3',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Hachiko.JPG',
    name: 'Hachiko',
    owner: 'Hidesaburō Ueno',
    description: 'Loving and loyal Akita.',
  },
];

const getAllDogs = () => dogs;

export default { getAllDogs };
