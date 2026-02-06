import Utils from "../common/utils.js";

(async () => {
  try {
    const products = await Utils.loadJSON("../large_dataset.json");
    const slicedProducts = products.slice(0, 20);
    const container = document.querySelector(".container");
    Utils.showItems(container, slicedProducts);
  } catch (e) {
    console.error(e);
  }
})();
