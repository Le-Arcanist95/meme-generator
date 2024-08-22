import axios from 'axios';

const baseUrl = 'https://api.imgflip.com';

export const fetchMemes = axios
    .get(baseUrl + '/get_memes')
    .then((res) => res.data.data)
    .catch((err) => console.log(err));

export const postMeme = axios
    .post(baseUrl + '/caption_image')
    .then((res) => res.data)
    .catch((err) => console.log(err));
