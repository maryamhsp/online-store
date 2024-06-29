export const updateCart = (storedCart, setCart) => {
  setCart(storedCart);
};

//ADD TO CART ++
export const AddToCart = (input, setCart) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let product = cart.find((x) => x.id === input.id);
  if (product) {
    product.quantity++;
    product.totalprice += input.price;
  } else {
    cart.push({
      id: input.id,
      name: input.title,
      price: input.price,
      totalprice: input.price,
      image: input.thumbnail,
      quantity: 1,
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart(cart, setCart);
};

//CLEAN CART
export const CleanCart = (cart, setCart) => {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart(cart, setCart);
};

//REMOVE FROM CART --
export const RemoveFromCart = (input, setCart) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let product = cart.find((x) => x.id === input.id);

  if (product) {
    product.quantity--;
    product.totalprice -= input.price;
    localStorage.setItem("cart", JSON.stringify(cart));

    if (product.quantity === 0) {
      cart = cart.filter((x) => x.id !== input.id);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
  updateCart(cart, setCart);
};
