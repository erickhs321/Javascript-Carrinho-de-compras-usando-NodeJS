const { products } = require("../src/data/products");
const {
  promotions,
  getShoppingCart,
  getProductInfos,
  getAllProductsInfos,
  getCartPromotion,
  getProductPrice,
  getTotalPrice,
  getDiscountValue,
} = require("../src");

const exemplo1Mock = {
  products: [
    { name: "DISNEY CRUELLA© T-SHIRT", category: "T-SHIRTS" },
    { name: "KNIT JOGGING PANTS", category: "PANTS" },
    { name: "ASYMMETRICAL LEATHER SLIDE HEELS", category: "SHOES" },
    { name: "SOFT FLAP BACKPACK", category: "BAGS" },
  ],
  promotion: "FULL LOOK",
  totalPrice: "404.96",
  discountValue: "75.00",
  discount: "15.63%",
};

const exemplo2Mock = {
  products: [
    { name: "RUBBERIZED PRINTED T-SHIRT", category: "T-SHIRTS" },
    { name: "CONTRAST SLOGAN T-SHIRT", category: "T-SHIRTS" },
    { name: "KNIT JOGGING PANTS", category: "PANTS" },
    { name: "MENSWEAR PANTS", category: "PANTS" },
  ],
  promotion: "DOUBLE LOOK",
  totalPrice: "504.95",
  discountValue: "25.00",
  discount: "4.72%",
};

const exemplo3Mock = {
  products: [
    { name: "PINK PANTHER™ T-SHIRT", category: "T-SHIRTS" },
    { name: "DISNEY CRUELLA© T-SHIRT", category: "T-SHIRTS" },
    { name: "RUBBERIZED PRINTED T-SHIRT", category: "T-SHIRTS" },
    { name: "CONTRAST SLOGAN T-SHIRT", category: "T-SHIRTS" },
  ],
  promotion: "SINGLE LOOK",
  totalPrice: "524.96",
  discountValue: "10.00",
  discount: "1.87%",
};

const exemplo4Mock = {
  products: [
    { name: "PINK PANTHER™ T-SHIRT", category: "T-SHIRTS" },
    { name: "RUBBERIZED PRINTED T-SHIRT", category: "T-SHIRTS" },
    { name: "CONTRAST SLOGAN T-SHIRT", category: "T-SHIRTS" },
    { name: "KNIT JOGGING PANTS", category: "PANTS" },
    { name: "ASYMMETRICAL LEATHER SLIDE HEELS", category: "SHOES" },
    {
      name: "SLINGBACK KITTEN HEEL SHOES WITH METAL DETAIL",
      category: "SHOES",
    },
  ],
  promotion: "TRIPLE LOOK",
  totalPrice: "784.94",
  discountValue: "130.00",
  discount: "14.21%",
};

// describe("Get Shopping Cart", () => {
//   it("Deve retornar um carrinho de compras a partir do array de IDs do exemplo 1", () => {
//     const cart = getShoppingCart([120, 230, 310, 490], products);

//     expect(cart).toEqual(exemplo1Mock);
//   });

//   it("Deve retornar um carrinho de compras a partir do array de IDs do exemplo 2", () => {
//     const cart = getShoppingCart([130, 140, 230, 260], products);

//     expect(cart).toEqual(exemplo2Mock);
//   });

//   it("Deve retornar um carrinho de compras a partir do array de IDs do exemplo 3", () => {
//     const cart = getShoppingCart([110, 120, 130, 140], products);

//     expect(cart).toEqual(exemplo3Mock);
//   });

//   it("Deve retornar um carrinho de compras a partir do array de IDs do exemplo 4", () => {
//     const cart = getShoppingCart([110, 130, 140, 230, 310, 330], products);

//     expect(cart).toEqual(exemplo4Mock);
//   });
// });

describe("Get Product Infos", () => {
  it("Deve retornar o nome e categoria do produto de id 110", () => {
    const product = getProductInfos(110, products);
    const { name, category } = products[0];

    expect(product).toEqual({ name, category });
  });
});

describe("Get Products Infos", () => {
  it("Deve retornar um array igual o products do exemplo1Mock", () => {
    const productsInfos = getAllProductsInfos([120, 230, 310, 490], products);

    expect(productsInfos).toEqual(exemplo1Mock.products);
  });
});

describe("Get Cart Promotion", () => {
  it(`Deve retornar o tipo de promoção do exemplomock1(${exemplo1Mock.promotion})`, () => {
    const { products } = exemplo1Mock;
    const response = getCartPromotion(products);

    expect(response).toEqual(exemplo1Mock.promotion);
  });

  it(`Deve retornar o tipo de promoção do exemplomock2(${exemplo2Mock.promotion})`, () => {
    const { products } = exemplo2Mock;
    const response = getCartPromotion(products);

    expect(response).toEqual(exemplo2Mock.promotion);
  });

  it(`Deve retornar o tipo de promoção do exemplomock3(${exemplo3Mock.promotion})`, () => {
    const { products } = exemplo3Mock;
    const response = getCartPromotion(products);

    expect(response).toEqual(exemplo3Mock.promotion);
  });

  it(`Deve retornar o tipo de promoção do exemplomock4(${exemplo4Mock.promotion})`, () => {
    const { products } = exemplo4Mock;
    const response = getCartPromotion(products);

    expect(response).toEqual(exemplo4Mock.promotion);
  });
});

describe("Get Product Price", () => {
  it("Deve retornar o preço do produto conforme nenhuma promoção aplicada", () => {
    const price = getProductPrice(products[0].name, products);

    expect(price).toBe(products[0].regularPrice);
  });

  it(`Deve retornar o preço do produto conforme promoção ${promotions[0]}`, () => {
    const price = getProductPrice(products[0].name, products, promotions[0]);

    expect(price).toBe(products[0].promotions[0].price);
  });

  it(`Deve retornar o preço do produto conforme promoção ${promotions[1]}`, () => {
    const price = getProductPrice(products[0].name, products, promotions[1]);

    expect(price).toBe(products[0].promotions[0].price);
  });

  it(`Deve retornar o preço do produto conforme promoção ${promotions[2]}`, () => {
    const price = getProductPrice(products[0].name, products, promotions[2]);

    expect(price).toBe(products[0].promotions[1].price);
  });

  it(`Deve retornar o preço do produto conforme promoção ${promotions[3]}`, () => {
    const price = getProductPrice(products[0].name, products, promotions[3]);

    expect(price).toBe(products[0].promotions[1].price);
  });

  it("Deve retornar o regular price quando o produto não entrar em uma promoção", () => {
    const price = getProductPrice(products[3].name, products, promotions[0]);

    expect(price).toBe(products[3].regularPrice);
  });

  it("Deve retornar 0 quando o produto não for encontrado", () => {
    const price = getProductPrice("blablabla", products, promotions[0]);

    expect(price).toBe(0);
  });
});

describe("Get Total Price", () => {
  it("Deve retornar o preço total dos produtos do exemploMock1", () => {
    const response = getTotalPrice(
      exemplo1Mock.products,
      products,
      exemplo1Mock.promotion
    );

    expect(response).toBe(exemplo1Mock.totalPrice);
  });
});

describe("Get Discount Value", () => {
  it("Deve retornar o desconto dos produtos do exemploMock1", () => {
    const response = getDiscountValue(
      exemplo1Mock.products,
      products,
      exemplo1Mock.totalPrice
    );

    expect(response).toBe(exemplo1Mock.discountValue);
  });
});
