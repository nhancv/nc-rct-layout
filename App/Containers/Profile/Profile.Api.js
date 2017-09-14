import apisauce from 'apisauce'

const create = () => {

  const data = "lakdsjfalsdkfj";

  const getData = (request) => {
    console.log('request', request);
    return request + "-" + data;
  };



  return {
    getData
  }
};

export default {
  create
}
