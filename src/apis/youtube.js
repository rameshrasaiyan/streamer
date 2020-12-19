import axios from 'axios';

const KEY = 'AIzaSyCQ4PX1wk_GhrselCSN6jOj3Rtfy_37QJg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})