import React, { useState } from 'react';
import '../../css/Cart/Cart.css';
import Checkout from '../CheckoutForm/Checkout';

function Cart({ cartItems, removeFromCart }) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState('');

  const submitOrder = (e) => {
    e.preventDefault();
    const order = {
      name: value.name,
      email: value.email,
    };
    console.log(order);
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    setValue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <div className='cart-wrapper'>
      <div className='cart-title'>
        {cartItems.length === 0
          ? 'Your shopping cart looks empty'
          : `Cart (${cartItems.length} items)`}
      </div>
      <div className='cart-items'>
        {cartItems.map((item) => {
          return (
            <div className='cart-item' key={item.id}>
              <img src={item.imageUrl} alt='#' />
              <div className='cart-info'>
                <div>
                  <p>{item.title}</p>
                  <p>{item.desc}</p>
                  <p>
                    quantity:<strong> {item.qty}</strong>
                  </p>
                  <p>
                    EGP<strong className='price-font'> {item.price}</strong>{' '}
                  </p>
                </div>
                <button className='cart-button' onClick={() => removeFromCart(item)}>
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {cartItems.length !== 0 && (
        <div className='cart-footer'>
          <div className='total'>
            Total:EGP{' '}
            <strong>
              {cartItems.reduce((acc, item) => {
                return acc + item.price * item.qty;
              }, 0)}
            </strong>
          </div>
          <button onClick={() => setShowForm(true)}>Select Product</button>
        </div>
      )}
      <Checkout
        showForm={showForm}
        setShowForm={setShowForm}
        submitOrder={submitOrder}
        handleChange={handleChange}
      />
    </div>
  );
}

export default Cart;
