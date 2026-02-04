import { loadJSON } from "../common/load.js"

async function main() {
  try {
    const products = await loadJSON();
    const filteredProducts = products.filter((product) => {
      return product.category === "Electrónica" && product.price > 50;
    })
    console.log(filteredProducts);
  } catch (e) {
    console.error(e);
  }
}

main();
