import React from 'react';

function ProductCard({ product, onAddToCart }) {
    
    return (
        <div className="product-card">
            {/* 💡 NIEUWE AFBEELDING TAG */}
            {/* Het pad start met /images/ omdat de public map de root is */}
            <img 
                src={`/images/${product.image}`} 
                alt={product.name} 
                className="product-image"
            />
            
            <h3>{product.name}</h3>
            <p className="category">{product.category}</p>
            <p className="price">€{product.price.toFixed(2)}</p>
            
            <button onClick={() => onAddToCart(product)}>
                Voeg toe aan winkelwagen
            </button>
        </div>
    );
}
export default ProductCard;