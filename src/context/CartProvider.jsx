import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "{}")
  );
  const [cartItems, setCartItems] = useState(cart.cartItems || []);

  const addToCart = (
    productID,
    name,
    price,
    color,
    size,
    quantity,
    discount,
    image
  ) => {
    // Find Existing Item then add Quantity
    const found = cartItems.find(
      (item) =>
        item.id === Number(productID) &&
        item.color === color &&
        item.size === size
    );

    if (found) {
      const newCartItems = cartItems.map((item) =>
        item.id === Number(productID) &&
        item.color === color &&
        item.size === size
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      console.log(newCartItems);
      setCartItems(newCartItems);
    } else {
      // Else if item does not exist add New Item
      const productItem = {
        id: Number(productID),
        name: name,
        price: price,
        color: color,
        size: size,
        quantity: quantity,
        discount: discount,
        image: image,
      };
      // console.log(productItem);
      setCartItems((prevState) => [...prevState, productItem]);
    }
  };
  const updateCart = (id, size, color, quantity) => {
    setCartItems((prevState) =>
      prevState.map((item) =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity: quantity }
          : item
      )
    );
  };
  const deleteItem = (id, size, color) => {
    const newItem = cartItems.filter(
      (item) => !(item.id === id && item.size === size && item.color === color)
    );
    setCartItems(newItem);
  };
  const cartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  useEffect(() => {
    // Update localStorage
    const myCart = {
      cartItems: cartItems,
    };
    localStorage.setItem("cart", JSON.stringify(myCart));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartItems,
        setCartItems,
        addToCart,
        updateCart,
        deleteItem,
        cartItemsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
