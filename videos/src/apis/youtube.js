import axios from 'axios';
const KEY = 'AIzaSyDgVTpsixpqTGB8M-G-CaYsQeuKeapeQa4';



export default axios.create(
    {
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params:{
            part: 'snippet',
            maxResults:5,
            key: KEY
        }
    }
);
