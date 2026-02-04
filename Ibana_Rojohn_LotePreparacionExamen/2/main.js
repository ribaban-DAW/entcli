import { loadJSON } from "../common/load.js";
import ObjUtils from "../common/object_utils.js";

function createTable(products) {
  const table = document.createElement("table");

  const thead = document.createElement("thead");
  const trh = document.createElement("tr");

  const keys = [];
  ObjUtils.fillKeys(products[0], keys);

  keys.forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key;
    trh.append(th);
  })
  thead.append(trh);

  const tbody = document.createElement("tbody");
  products.forEach((product) => {
    const trd = document.createElement("tr");
    const vals = [];
    ObjUtils.fillValues(product, vals);
    vals.forEach((val) => {
      const td = document.createElement("td");
      td.textContent = val;
      trd.append(td);
    })
    tbody.append(trd);
  })

  table.append(thead, tbody);
  return table;
}

function showProductsInTable(container, products) {
  container.append(createTable(products));
}

async function main() {
  try {
    const products = await loadJSON();
    const slicedProducts = products.slice(0, 20);
    const container = document.querySelector(".container");
    showProductsInTable(container, slicedProducts);
  } catch (e) {
    console.error(e);
  }
}

main();
