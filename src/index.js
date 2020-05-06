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
  const productsLength = products.length;

  const categories =
    productsLength > 1
      ? products.map(({ category }) => category)
      : products.category;

  const amountCategories = categories.reduce((acc, cat) => {
    return acc.includes(cat) ? acc : [...acc, cat];
  }, []).length;

  if (productsLength > 1) {
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
}

function getProductPrice(productName, productsList, promotion) {
  const product = productsList.find((product) => productName === product.name);

  if (!promotion) {
    return product.regularPrice;
  } else {
    const { promotions } = product;
    const { price } =
      promotions.filter(({ looks }) => looks.includes(promotion))[0] || {};

    return price ? price : product.regularPrice;
  }
}

module.exports = {
  promotions,
  getShoppingCart,
  getProductInfos,
  getAllProductsInfos,
  getCartPromotion,
  getProductPrice,
};
