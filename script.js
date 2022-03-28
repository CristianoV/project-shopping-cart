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

const valorCarrinho = async (id) => {
  const item = await fetchItem(id);
  if (typeof item.price === 'number') {
    document.querySelector('.total-price')
    .innerHTML = `<h1>Subtotal: R$ ${item.price}</h1>`;
  } else {
    const numero = Math.random() * (100 - 0) + 0;
    document.querySelector('.total-price')
    .innerHTML = `<h1>Subtotal: R$ ${numero}</h1>`;
  }
};

//
const Subtotal = (valor) => {
  if (!document.querySelector('.carrinho')) {
    const carrinhoContainer = document.querySelector('.cart');
    const section = document.createElement('section');
    section.className = 'carrinho';
    section.appendChild(createCustomElement('span', 'total-price', 'Subtotal: R$ 0,00'));
    carrinhoContainer.appendChild(section);
  } else {
    valorCarrinho(valor);
  }
};
//

async function cartItemClickListener(event) {
  if (event) {
    event.target.remove();
    console.log(event.target);
    // Subtotal(event.target.innerText);
    saveCartItems();
  } else {
    const item = await document.querySelectorAll('.cart__item');
    item.forEach((elemento) => {
      elemento.addEventListener('click', () => {
        elemento.remove();
        saveCartItems();
        // Subtotal(elemento.innerText);
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
  const item = elemento.querySelector('.item__add');
  item.addEventListener('click', () => {
  colocandoCarrinho(sku.innerText);
  Subtotal(sku.innerText);
  });
});
};

const loading = () => {
  const adiciona = document.querySelector('.items');
  const carregando = document.createElement('section');
  carregando.innerText = 'Carregando';
  carregando.className = 'loading';
  adiciona.appendChild(carregando);
};

const colocandoProduto = async () => {
  const produto = await fetchProducts('computador');
  const adiciona = document.querySelector('.items');
  document.querySelector('.loading').remove();
  produto.reduce((acc, element) => {
    acc.sku = element.id;
    acc.name = element.title;
    acc.image = element.thumbnail;
    adiciona.appendChild(createProductItemElement(acc));
    return {};
}, {});
  eventoNoBotão();
};

const limpandoCarrinho = () => {
const todosOsItens = document.querySelectorAll('.cart__item');
todosOsItens.forEach((acc) => {
  acc.remove();
  });
  saveCartItems();
};

const botao = document.querySelector('.empty-cart');
botao.addEventListener('click', (limpandoCarrinho));

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

window.onload = () => {
  loading();
  colocandoProduto();
  getSavedCartItems();
  cartItemClickListener();
  Subtotal();
};
