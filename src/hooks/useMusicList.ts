export interface Music {
    url: string;
    name: string;
    image: string;
}

export default function useMusicList() : Music[] {
    return[ {
        name: 'Music 1',
        url: require('../assets/music/ringltone balkan dwarf.mp3'),
        image: require('../assets/images/musicimage.jpg') 
      },
      {
        name: 'Music 2',
        url: require('../assets/music/ringltone balkan dwarf.mp3'),
        image: require('../assets/images/musicimage.jpg')
      },
      {
        name: 'Music 3 ',
        url: require('../assets/music/ringltone balkan dwarf.mp3'),
        image: require('../assets/images/musicimage.jpg')
      },
      {
        name: 'Music 4',
        url: require('../assets/music/ringltone balkan dwarf.mp3'),
        image: require('../assets/images/musicimage.jpg')
      },
      {
        name: 'Music 5',
        url: require('../assets/music/ringltone balkan dwarf.mp3'),
        image: require('../assets/images/musicimage.jpg')
      },
      {
        name: 'Music 6',
        url: require('../assets/music/ringltone balkan dwarf.mp3'),
        image: require('../assets/images/musicimage.jpg')
      },
]
  
}
