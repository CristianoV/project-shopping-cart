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

function cartItemClickListener(event) {
  // coloque seu código aqui
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
  const carinho = document.querySelector('.cart__items');
  carinho.appendChild(li);
};

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const botão = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  section.appendChild(botão);
  botão.addEventListener('click', async () => {
    colocandoCarrinho(sku);
}); return section;
}

const colocandoProduto = async () => {
  const produto = await fetchProducts('computador');
  const lista = produto.reduce((acc, element) => {
    acc.sku = element.id;
    acc.name = element.title;
    acc.image = element.thumbnail;
    const teste = createProductItemElement(acc);
    const adiciona = document.querySelector('.items');
    adiciona.appendChild(teste);
    return {};    
}, {});
  return lista;
};

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

window.onload = () => {
  colocandoProduto();
 };
