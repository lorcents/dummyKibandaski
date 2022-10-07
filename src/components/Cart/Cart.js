import React, { useContext, useState } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";

const Cart = (props) => {
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckOut(true);
  };

  const modalActions = (
    <div className={styles.actions}>
      <button onClick={props.onHideCart} className={styles["button--alt"]}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const submitOrderHandler = async (userData) => {
    setIsSubmiting(true);
    const response = await fetch(
      "https://kibandaski-7b19c-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );

    setIsSubmiting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
      {isCheckOut && (
        <CheckOut onCancel={props.onHideCart} onConfirm={submitOrderHandler} />
      )}
      {!isCheckOut && modalActions}
    </React.Fragment>
  );

  const isSubmitingModalcontent = <p>Ordering ...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Orderd Placed succefuly!</p>
      <div className={styles.actions}>
        <button onClick={props.onHideCart} className={styles.button}>
          Close
        </button>
      </div>
    </React.Fragment>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {!isSubmiting && !didSubmit && cartModalContent}
      {isSubmiting && isSubmitingModalcontent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
};
export default Cart;
