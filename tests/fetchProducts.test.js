require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('2 - Teste a função fecthItem', () => {
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  })
  it('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
    await fetchProducts("computador");
    expect(fetch).toHaveBeenCalled();
  })
  it('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    const user = 'Computador';
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${user}`;
    await fetchProducts(user);
    expect(fetch).toHaveBeenCalledWith(url);
  })
  it('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    await expect(typeof fetchProducts('Computador')).toEqual (typeof computadorSearch);
  })
  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  })
});
