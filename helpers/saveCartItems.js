const saveCartItems = (elemento) => {
    window.localStorage.setItem('cartItems', elemento);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
