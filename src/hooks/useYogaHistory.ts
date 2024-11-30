interface YogaSesison{
    title: string;
    date: string;
    duration: string;
}


export function useYogaHistory():YogaSesison[]{
    return([
        {
            title: 'Relaxation Yoga',
            date: '2024/11/24',
            duration: '30 min',
        },
        {
            title: 'Energy Yoga',
            date: '2024/11/25',
            duration: '15 min',
        },
        {
            title: 'Disco Yoga',
            date: '2024/11/27',
            duration: '10 min',
        },
        {
            title: 'Peace Yoga',
            date: '2024/11/27',
            duration: '25 min',
        },
        {
            title: 'Sun Yoga',
            date: '2024/11/28',
            duration: '20 min',
        },

]);
}