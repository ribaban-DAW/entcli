import Utils from "../common/utils.js";

(async () => {
  try {
    const products = await Utils.loadJSON("../large_dataset.json");

    const calculateElectronicsAveragePrice = (products) => {
      const electronicProducts = products.filter((product) => product.category === "Electrónica");
      const totalPrice = electronicProducts.reduce((acc, product) => acc + product.price, 0);

      return (totalPrice / electronicProducts.length).toFixed(2);
    }

    const findMostExpensiveAndCheapestFashionProduct = (products) => {
      const fashionProducts = products.filter((product) => product.category === "Moda");
      let mostExpensive = fashionProducts[0];
      let cheapest = fashionProducts[0];
      fashionProducts.forEach((product) => {
        if (product.price > mostExpensive.price) {
          mostExpensive = product;
        }
        if (product.price < cheapest.price) {
          cheapest = product;
        }
      });

      return { mostExpensive, cheapest };
    }

    const findCategoryWithMostStock = (products) => {
      const stockByCategory = {};
      products.forEach((product) => {
        if (!product.details || !product.details.stock) {
          return;
        }

        if (!stockByCategory[product.category]) {
          stockByCategory[product.category] = 0;
        }
        stockByCategory[product.category] += product.details.stock;
      });

      let categoryWithMostStock = null;
      let maxStock = 0;
      for (const category in stockByCategory) {
        if (stockByCategory[category] > maxStock) {
          maxStock = stockByCategory[category];
          categoryWithMostStock = category;
        }
      }

      return { name: categoryWithMostStock, stock: maxStock };
    }

    const { mostExpensive, cheapest } = findMostExpensiveAndCheapestFashionProduct(products);
    const { name: categoryWithMostStock, stock: mostStock } = findCategoryWithMostStock(products);
    const container = document.querySelector(".container");
    container.append(
      Utils.createElement("p", `Promedio productos Electrónica: ${calculateElectronicsAveragePrice(products)}€`),
      Utils.createElement("p", `Producto más caro de Moda: ${mostExpensive.name} - ${mostExpensive.price}€`),
      Utils.createElement("p", `Producto más barato de Moda: ${cheapest.name} - ${cheapest.price}€`),
      Utils.createElement("p", `Categoría con más stock: ${categoryWithMostStock} - ${mostStock}`),
    )
  } catch (e) {
    console.error(e);
  }
})();

