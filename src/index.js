const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"];

function getShoppingCart(ids, productsList) {
  return {};
}

function getProductInfos(id, productsList) {
  const product = productsList.find((product) => id === product.id);
  const { name, category } = product;
  return { name, category };
}

function getAllProductsInfos(ids, productsList) {
  const products = ids.map((i) => getProductInfos(i, productsList));
  return products;
}

function getCartPromotion(products) {
  let categories = [];
  if (products.length > 1) {
    categories = products.map(({ category }) => category);
  } else {
    categories = products.category;
  }

  const filterCategories = [];

  categories.forEach((cat) => {
    if (!filterCategories.includes(cat)) {
      filterCategories.push(cat);
    }
  });

  const amountCategories = filterCategories.length;

  switch (amountCategories) {
    case 1:
      return promotions[0];
    case 2:
      return promotions[1];
    case 3:
      return promotions[2];
    case 4:
    default:
      return promotions[3];
  }
}

module.exports = {
  getShoppingCart,
  getProductInfos,
  getAllProductsInfos,
  getCartPromotion,
};
