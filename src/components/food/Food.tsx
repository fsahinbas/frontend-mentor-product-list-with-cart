import React from "react";
import styles from "./food.module.css";
import { CartItem, Product } from "../../types/types";

type FoodProps = {
  product: Product;
  cartItems: CartItem[];
  handleAddToCart: (product: Product) => void;
  handleDecrement: (name: string) => void;
  handleIncrement: (name: string) => void;
};
const Food = (props: FoodProps) => {
  const { category, name, price, image } = props.product;
  const quantity =
    props.cartItems.filter((item) => item.name === name)[0] &&
    props.cartItems.filter((item) => item.name === name)[0].quantity;
  return (
    <div className={styles.wrapper}>
      <div className={styles.photoWrapper} role="img">
        <img
          src={image.mobile}
          alt={name}
          className={`
            ${styles.photo} 
            ${
              props.cartItems.filter((cartItem) => cartItem.name === name)
                .length > 0
                ? styles.addedToCart
                : ""
            }
              `}
        />
        {props.cartItems.filter((item) => item.name === name).length === 0 && (
          <button
            className={`text-preset-4 ${styles.btnCart}`}
            onClick={() => props.handleAddToCart(props.product)}
          >
            <img src="./assets/images/icon-add-to-cart.svg" alt="" />
            Add to Cart
          </button>
        )}
        {props.cartItems.filter((item) => item.name === name).length > 0 && (
          <div className={styles.quantityWrapper}>
            <div
              className={styles.quantityBtn}
              onClick={() => props.handleDecrement(name)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="2"
                fill="none"
                viewBox="0 0 10 2"
              >
                <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
              </svg>
            </div>
            <p className={`text-preset-4 ${styles.quantity}`}>{quantity}</p>
            <div
              className={styles.quantityBtn}
              onClick={() => props.handleIncrement(name)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
              >
                <path
                  fill="#fff"
                  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <p className={`"text-preset-4" ${styles.category}`}>{category}</p>
        <p className={`text-preset-3 ${styles.name}`}>{name}</p>
        <p className={`text-preset-3 ${styles.price}`}>${price}</p>
      </div>
    </div>
  );
};

export default Food;
