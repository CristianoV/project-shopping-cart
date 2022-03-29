const fetchProducts = async (QUERY) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
    const result = await fetch(url);
    const data = await result.json();
    const resultado = await data.results;
    return await resultado;
  } catch (Error) {
    return Error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
