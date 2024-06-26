import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    try {
      setCart((prevCart) => {
        const existingItemIndex = prevCart.findIndex(
          (cartItem) => cartItem.id === item.id
        );

        if (existingItemIndex !== -1) {
          const updatedCart = [...prevCart];
          updatedCart[existingItemIndex] = {
            ...updatedCart[existingItemIndex],
            quantity: updatedCart[existingItemIndex].quantity + 1,
          };
          return updatedCart;
        } else {
          const newCart = [...prevCart, { ...item, quantity: 1 }];
          return newCart;
        }
      });
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const removeFromCart = (itemToRemove) => {
    try {
      setCart((prevCart) => {
        const updatedCart = prevCart.filter(
          (item) => item.id !== itemToRemove.id
        );
        return updatedCart;
      });
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const decrementQuantity = (itemToRemove) => {
    try {
      setCart((prevCart) => {
        return prevCart
          .map((item) => {
            if (item.id === itemToRemove.id) {
              const updatedQuantity = item.quantity - 1;
              return {
                ...item,
                quantity: Math.max(updatedQuantity, 0),
              };
            }
            return item;
          })
          .filter((item) => item.quantity > 0);
      });
    } catch (error) {
      console.error("Error decrementing item quantity:", error);
    }
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) =>
        total + (item.price.replace(/\D/g, "") / 100) * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart, // Todos os produtos existentes no carrinho
        setCart, // Instanciar produto no carrinho
        addToCart, // Adicionar produto no carrinho
        removeFromCart, // Remover totalmente do carrinho
        decrementQuantity, // Diminuir quantidade de produtos (do mesmo)
        calculateTotal, //valor total
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Algo de errado com o contexto");
  }
  return context;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
