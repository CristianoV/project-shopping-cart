const saveCartItems = (elemento) => {
    window.localStorage.setItem('cartItems', elemento.innerHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
