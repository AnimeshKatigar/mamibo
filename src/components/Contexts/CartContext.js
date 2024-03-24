"use client";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(null);
  const [wishList, setWishList] = useState(null);

  useEffect(() => {
    let itemsCart = JSON.parse(localStorage.getItem("cartItems"));
    let itemsWishlist = JSON.parse(localStorage.getItem("wishListItems"));
    itemsCart && setCartItems([...itemsCart]);
    itemsWishlist && setWishList([...itemsWishlist]);
  }, []);

  useEffect(() => {
    if (cartItems !== null) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    if (wishList !== null) {
      localStorage.setItem("wishListItems", JSON.stringify(wishList));
    }
  }, [wishList]);

  const addToCart = (item) => {
    if (!cartItems) {
      setCartItems([item]);
    } else setCartItems([...cartItems, item]);
  };

  const addToWishlist = (item) => {
    if (!wishList) {
      setWishList([item]);
    } else setWishList([...wishList, item]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.productDetails._id !== id));
  };

  const removeFromWishlist = (id) => {
    setWishList(wishList.filter((item) => item.productDetails._id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishList,
        addToCart,
        addToWishlist,
        removeFromCart,
        setCartItems,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
