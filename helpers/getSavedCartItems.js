const getSavedCartItems = () => {
  const recuperando = localStorage.getItem('cartItems');
  const ol = document.querySelector('.cart__items');
  ol.innerHTML = recuperando;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
