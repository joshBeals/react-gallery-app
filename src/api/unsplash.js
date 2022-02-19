import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID JW3F3qRyaGlO3dPh9ztewMhbEL8PSFku5PiPd-P5XZw'
    }
});