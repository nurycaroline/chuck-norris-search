import Hrequest from '../helpers/request';

const Service = {
  async getRandom() {
    const url = 'https://api.chucknorris.io/jokes/random';
    const response = await Hrequest(url, 'GET', 'Algo deu errado 😭');
    return response;
  },
  async getByQuery(query) {
    if (!query) {
      return { message: 'Não foi encontrado nenhum resultados 😔' };
    }
    const url = `https://api.chucknorris.io/jokes/search?query=${query}`;
    const response = await Hrequest(url, 'GET', 'Algo deu errado 😭');
    return response;
  },
};

export default Service;
