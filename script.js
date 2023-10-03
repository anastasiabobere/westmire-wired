const global = { currentPage: window.location.pathname };

async function displayProducts() {
  try {
    const { results } = await fetchAPIData();
    console.log(results);
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}

async function fetchAPIData() {
  const res = await fetch(
    "https://dummyjson.com/products/category/smartphones",
  );
  console.log(res);
  const data = await res.json();
  return data;
}

function init() {
  switch (global.currentPage) {
    case "/products.html":
      displayProducts();
      break;
    case "/product-details.html":
      displayProductsDetails();
      break;
    default:
      console.log("home page");
  }
}

document.addEventListener("DOMContentLoaded", init);
