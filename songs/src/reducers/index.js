import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title:'No scrubs',duration:'4:05'},
        {title:'Bla',duration:'3:25'}
    ];
};


const selectedSongReducer = (selectedSong = null,action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong; 
};


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});