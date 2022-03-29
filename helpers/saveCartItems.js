const saveCartItems = (elemento) => {
  if (elemento) {
    console.log(elemento);
    window.localStorage.setItem('cartItems', elemento);
  } else {
    const ol = document.querySelector('.cart__items');
    window.localStorage.setItem('cartItems', ol.innerHTML);
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
