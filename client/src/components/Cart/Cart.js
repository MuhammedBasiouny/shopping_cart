import React from 'react';
import '../../css/Cart/Cart.css';

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {cartItems.length === 0
          ? 'Your shopping cart looks empty'
          : `Cart (${cartItems.length} items)`}
      </div>
      <div className="cart-items">
        {cartItems.map((item) => {
          return (
            <div className="cart-item" key={item.id}>
              <img src={item.imageUrl} alt="#" />
              <div className="cart-info">
                <div>
                  <p>{item.title}</p>
                  <p>{item.desc}</p>
                  <p>
                    quantity:<strong> {item.qty}</strong>
                  </p>
                  <p>
                    EGP<strong className="price-font"> {item.price}</strong>{' '}
                  </p>
                </div>
                <button className="cart-button" onClick={() => removeFromCart(item)}>
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
