function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

async function cartItemClickListener(event) {
  if (event) {
    event.target.remove();
    saveCartItems();
  } else {
    const item = await document.querySelectorAll('.cart__item');
    item.forEach((elemento) => {
      elemento.addEventListener('click', () => {
        elemento.remove();
        saveCartItems();
      });
    });
  }
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const colocandoCarrinho = async (identificacao) => {
  const { id, title, price } = await fetchItem(identificacao);
  const li = createCartItemElement({ sku: id, name: title, salePrice: price });
  const carrinho = document.querySelector('.cart__items');
  carrinho.appendChild(li);
  saveCartItems();
};

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}

const eventoNoBotão = async () => {
  const todosOsItens = document.querySelectorAll('.item');
  todosOsItens.forEach((elemento) => {
  const sku = elemento.querySelector('.item__sku');
  const feijão = elemento.querySelector('.item__add');
  feijão.addEventListener('click', () => {
  colocandoCarrinho(sku.innerText);
  });
});
};

const colocandoProduto = async () => {
  const produto = await fetchProducts('computador');
  produto.reduce((acc, element) => {
    acc.sku = element.id;
    acc.name = element.title;
    acc.image = element.thumbnail;
    const teste = createProductItemElement(acc);
    const adiciona = document.querySelector('.items');
    adiciona.appendChild(teste);
    return {};
}, {});
  eventoNoBotão();
};

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

window.onload = () => {
  colocandoProduto();
  getSavedCartItems();
  cartItemClickListener();
};
