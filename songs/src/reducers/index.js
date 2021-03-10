//Reducers!
//Song list reducer + Selected song reducer
const songsReducer = () => {
    return [
        {
            title: 'No Scrubs',
            duration: '4:05'
        },
        {
            title: 'Macarena',
            duration: '3:23'
        },
        {
            title: 'All Star',
            duration: '3:15'
        },
        {
            title: 'I want it That Way',
            duration: '2:45'
        },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong
};