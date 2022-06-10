import React from 'react';
import Modal from 'react-modal';

function ProductModal({ product, closeModal }) {
  return (
    <Modal isOpen={product} onRequestClose={closeModal}>
      <span className="close-icon" onClick={closeModal}>
        &times;
      </span>
      <div className="product-info">
        <img src={product.imageUrl} alt={product.title} />
        <p>{product.title}</p>
        <p>{product.desc}</p>
        <p className="product-modal-price">EGP {product.price}</p>
      </div>
    </Modal>
  );
}

export default ProductModal;
