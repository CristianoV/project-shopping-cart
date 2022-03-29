const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

const argumento = '<ol><li>Item</li></ol>';

describe('4 - Teste a função saveCartItems', () => {
  it('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', () => {
    saveCartItems(argumento);
    expect(localStorage.setItem).toHaveBeenCalled();
  })
  it('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros,', () => {
    saveCartItems(argumento);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', argumento.innerHTML)
  })
});
