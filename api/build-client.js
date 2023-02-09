import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    console.log('>>>  We are on the server ');
    return axios.create({
      baseURL:
        '/',
      headers: req.headers,
    });
  } else {
    console.log('>>>  We are on the browser ');
    return axios.create({
      baseUrl: '/',
    });
  }
};
