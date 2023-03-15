import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    products: [],
    product: [],
  },
  reducers: {
    clear(state, action) {
      state = {
        cart: [],
        products: [],
        product: [],
      };
    },
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload
      );
    },
    getProducts(state, action) {
      state.products = action.payload;
    },
    getProduct(state, action) {
      state.product = action.payload;
    },

    filterProducts(state, action) {
      state.products = state.products.filter(
        (product) => product.category === action.payload
      );
    },
    filterPrice(state, action) {
      state.products = state.products.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    filterDownPrice(state, action) {
      state.products = state.products.sort(function (a, b) {
        return b.price - a.price;
      });
    },
    filterPopularity(state, action) {
      state.products = state.products.sort(function (a, b) {
        return a.popularity - b.popularity;
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  getProducts,
  getProduct,
  filterProducts,
  filterPrice,
  filterDownPrice,
  filterPopularity,
  clear,
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
