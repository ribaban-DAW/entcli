async function loadJSON() {
  const productsJSON = localStorage.getItem("products");
  if (!productsJSON) {
    const response = await fetch("../large_dataset.json");
    if (!response.ok) {
      throw new Error("couldn't fetch resources");
    }

    const data = await response.json();
    if (!data.products) {
      throw new Error("no data");
    }

    localStorage.setItem("products", JSON.stringify(data.products));
    return data.products;
  }

  return JSON.parse(productsJSON);
}

export { loadJSON };
