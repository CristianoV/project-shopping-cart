const ol = document.querySelector('.cart__items');
const saveCartItems = () => {
    window.localStorage.setItem('cartItems', ol.innerHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
