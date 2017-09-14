import apisauce from 'apisauce'

const create = (baseURL = 'https://api.github.com/') => {

  const data = "world";
  const getData = (request) => {
    return request + "-" + data;
  };

  //Example rest
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  });
  const getUser = (username) => api.get('search/users', {q: username});

  return {
    getData,
    getUser
  }
};

export default {
  create
}
