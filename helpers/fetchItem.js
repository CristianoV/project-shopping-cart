const fetchItem = async (ItemID) => {
  const url = `https://api.mercadolibre.com/items/${ItemID}`;

  try {
    const result = await fetch(url);
    const data = await result.json();
    const resultado = await data;
    // console.log(resultado);
    return await resultado;
  } catch (error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
