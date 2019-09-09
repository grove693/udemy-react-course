import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID dc0fb1f9fde362bbc7607a4a8b50995cee1d22c851c485c34ff2c18d52ad3890'

       }
});