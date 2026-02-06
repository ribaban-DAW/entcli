import Utils from "../common/utils.js";


(async () => {
  try {
    const container = document.querySelector(".container");
    const products = await Utils.loadJSON("../large_dataset.json");
    const productsPerPage = 10;
    let currentPage = 0;

    const showCurrentPage = (page) => {
      const slicedProducts = products.slice(page * productsPerPage, (page + 1) * productsPerPage);
      Utils.showItems(container, slicedProducts);
    }

    showCurrentPage(currentPage);

    document.querySelector("#prev").addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage > 0) {
        currentPage--;
      }
      showCurrentPage(currentPage);
    });

    document.querySelector("#next").addEventListener("click", (e) => {
      e.preventDefault();
      if ((currentPage + 1) * productsPerPage < products.length) {
        currentPage++;
      }
      showCurrentPage(currentPage);
    });

  } catch (e) {
    console.error(e);
  }
})();

