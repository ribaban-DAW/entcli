import Utils from "../common/utils.js";

(async () => {
  try {
    const container = document.querySelector(".container");

    let fashionProducts = localStorage.getItem("fashionProducts");
    if (fashionProducts) {
      Utils.showItems(container, JSON.parse(fashionProducts));

      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("Fetching done");
    }


    const products = await Utils.loadJSON("../large_dataset.json");
    fashionProducts = products.filter((product) => product.category === "Moda");
    localStorage.setItem("fashionProducts", JSON.stringify(fashionProducts));

    Utils.showItems(container, fashionProducts);
  } catch (e) {
    console.error(e);
  }
})();
