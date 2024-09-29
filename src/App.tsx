import React from "react";
import "./App.css";
import data from "./data.json";
import Food from "./components/food/Food";
import { Product, CartItem } from "./types/types";
import Cart from "./components/cart/Cart";

function App() {
  const [products, setProducts] = React.useState(data);
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  const cartTotalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  const handleRemoveItem = (name: string) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name));
  };

  const handleDecrement = (name: string) => {
    if (
      cartItems.filter((cartItem) => cartItem.name === name)[0].quantity === 1
    ) {
      handleRemoveItem(name);
    }

    setCartItems((prev) => {
      return prev.map((item) => {
        if (item.name === name && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    });
  };

  const handleIncrement = (name: string) => {
    setCartItems((prev) => {
      return prev.map((item) => {
        if (item.name === name) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  return (
    <main>
      <section className="deserts">
        <h1 className="text-preset-1">Deserts</h1>
        <div className="food-wrapper">
          {products.map((product) => (
            <Food
              key={product.name}
              product={product}
              handleAddToCart={handleAddToCart}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              cartItems={cartItems}
            />
          ))}
        </div>
      </section>
      <Cart
        cartItems={cartItems}
        cartTotalQuantity={cartTotalQuantity}
        handleRemoveItem={handleRemoveItem}
      />
    </main>
  );
}

export default App;
