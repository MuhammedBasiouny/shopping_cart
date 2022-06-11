import React from 'react';
import '../../css/CheckoutForm/Checkout.css';
import Input from '../Input/Input';

function Checkout({ showForm, setShowForm, submitOrder, handleChange }) {
  return (
    <>
      {showForm && (
        <div className="checkout-form">
          <span className="close-icon" onClick={() => setShowForm(false)}>
            &times;
          </span>
          <form onSubmit={submitOrder}>
            <Input label="Name" type="text" name="name" onChange={handleChange} />
            <Input label="Email" type="email" name="email" onChange={handleChange} />
            <div>
              <button type="submit">Checkout</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Checkout;
