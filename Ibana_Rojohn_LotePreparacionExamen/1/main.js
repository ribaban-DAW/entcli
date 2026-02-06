import Utils from "../common/utils.js";

(async () => {
  try {
    const products = await Utils.loadJSON("../large_dataset.json");
    const filteredProducts = products.filter((product) =>
      product.category === "Electrónica" && product.price > 50
    );
    console.log(filteredProducts);
  } catch (e) {
    console.error(e);
  }
})();
