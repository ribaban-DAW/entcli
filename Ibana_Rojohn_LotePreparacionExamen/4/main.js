import Utils from "../common/utils.js";

(async () => {
  try {
    const container = document.querySelector(".container");
    const products = await Utils.loadJSON("../large_dataset.json");
    Utils.showItems(container, products);

    const searchFunc = (query) => {
      const filteredProducts = products.filter((producto) => {
        return producto.name.toLowerCase().includes(query.toLowerCase()) ||
          producto.category.toLowerCase().includes(query.toLowerCase());
      });
      Utils.showItems(container, filteredProducts);
    }

    // Para que evitar lag al escribir
    let timeout = null;
    document.querySelector(".form__input").addEventListener("input", (e) => {
      e.preventDefault();
      clearTimeout(timeout);
      timeout = setTimeout(() => searchFunc(e.target.value), 300);
    });
  } catch (e) {
    console.error(e);
  }
})();

