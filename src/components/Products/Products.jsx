import React, { useEffect, useContext } from 'react';

import './Products.css';
import fetchProducts from '../API/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loanding';
import AppContext from '../../context/AppContext';

function Products() {

  const {
    products,
    setProducts,
    loading,
    setLoading
  } = useContext(AppContext);

  useEffect(() => {
    fetchProducts('produto').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loading />) || (
      <section className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
    )
  );
  
}

export default Products;
