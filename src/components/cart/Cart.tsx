import React from "react";
import styles from "./cart.module.css";
import { CartItem } from "../../types/types";
type CartProps = {
  cartItems: CartItem[];
  handleRemoveItem: (name: string) => void;
  cartTotalQuantity: number;
};
const Cart = (props: CartProps) => {
  const { cartItems, cartTotalQuantity } = props;
  const cartItemsElements = cartItems.map((cartItem) => (
    <div className={styles.cartItem} key={cartItem.name}>
      <div className="text-preset-4">
        <p className={styles.name}>{cartItem.name}</p>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <p className={styles.quantity}>{cartItem.quantity}x</p>
          <p className={styles.price}>@ ${cartItem.price}</p>
          <p className={styles.total}>${cartItem.price * cartItem.quantity}</p>
        </div>
      </div>
      <div
        className={styles.btnRemove}
        onClick={() => props.handleRemoveItem(cartItem.name)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#CAAFA7"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </div>
    </div>
  ));
  return (
    <div className={styles.wrapper}>
      <h1 className={`text-preset-2 ${styles.title}`}>
        Your Cart ({cartTotalQuantity})
      </h1>
      {cartItems.length === 0 && (
        <div className={styles.emptyCart}>
          <img src="./assets/images/illustration-empty-cart.svg" alt="" />
          <p
            className="text-preset-4"
            style={{
              fontWeight: "600",
              textAlign: "center",
              color: "var(--color-rose-500)",
            }}
          >
            Your added items will appear here
          </p>
        </div>
      )}
      {cartItems.length > 0 && (
        <>
          {cartItemsElements}
          <div
            className={styles.orderTotal}
            style={{ color: "var(--color-rose-900)" }}
          >
            <span className="text-preset-4">Order Total</span>
            <span className="text-preset-2">
              $
              {cartItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
              )}
            </span>
          </div>
          <div className={`text-preset-4 ${styles.delivery}`}>
            <img src="./assets/images/icon-carbon-neutral.svg" alt="" />
            <p>
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </div>
          <button className={`text-preset-4 ${styles.btnConfirm}`}>
            <span>Confirm Order</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
