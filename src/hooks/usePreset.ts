export interface Preset {
    name: string;
    info: string;
}

export default function usePreset() : Preset[] {
    return[ {
        name: 'Bhakti',
        info: '15 min | Beginner',
        
      },
      {
        name: 'Modern',
        info: '20 min | Beginner'
      },
      {
        name: 'Rock',
        info: '30 min | Intermediate'
      },
      {
        name: 'Peace',
        info: '10 min | Advance'
      },
     
]
  
}
