import React, { useState, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Filter from './components/Filter/Filter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import { Provider } from 'react-redux';
// import { words } from './words';
import data from './data.json';
import store from './store/store';

function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState('');
  const [size, setSize] = useState('');
  const [cartItems, setcartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

  const handleFilterBySize = (e) => {
    setSize(e.target.value);
    if (e.target.value === 'ALL') {
      setProducts(data);
    } else {
      let productsClone = [...products];
      let newProducts = productsClone.filter(
        (product) => product.size.indexOf(e.target.value) !== -1
      );
      setProducts(newProducts);
    }
  };

  const handleFilterByOrder = (e) => {
    let order = e.target.value;
    setSort(order);
    let productsClone = [...products];
    let newProducts = productsClone.sort(function (a, b) {
      if (order === 'lowest') {
        return a.price - b.price;
      } else if (order === 'highest') {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProducts);
  };

  const addToCart = (product) => {
    const cartItemsClone = [...cartItems];
    var isProductExist = false;
    cartItemsClone.forEach((p) => {
      if (p.id === product.id) {
        p.qty++;
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      cartItemsClone.push({ ...product, qty: 1 });
    }
    setcartItems(cartItemsClone);
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems];
    let filteredItems = cartItemsClone.filter((p) => p.id !== product.id);
    setcartItems(filteredItems);
  };

  return (
    <Provider store={store}>
      <div className='layout'>
        <Header />
        <main>
          <div className='wrapper'>
            <Products products={products} addToCart={addToCart} />
            <Filter
              productNumber={products.length}
              size={size}
              sort={sort}
              handleFilterBySize={handleFilterBySize}
              handleFilterByOrder={handleFilterByOrder}
            />
          </div>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
