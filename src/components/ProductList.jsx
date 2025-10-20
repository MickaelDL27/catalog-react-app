import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, addToCart }) {
    return (
        <div className="product-grid">
            {/* De .map() is essentieel in React om lijsten te renderen */}
            {products.map(product => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={addToCart} 
                />
            ))}
        </div>
    );
}
export default ProductList;