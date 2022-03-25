const fetchProducts = async (QUERY) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;

  try {
    const result = await fetch(url);
    const data = await result.json();
    const resultado = await data.results;
    return await resultado;
  } catch (error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
