import React from 'react';

function CartSummary({ cart, removeFromCart }) { 
    
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart-summary">
            <h2>Winkelwagen ({cart.length} items)</h2>

            {cart.length === 0 ? (
                <p>Je winkelwagen is leeg.</p>
            ) : (
                <>
                    <div className="cart-items-list">
                        {cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <span className="item-name">{item.name}</span>
                                <span className="item-details">
                                    {item.quantity} x €{item.price.toFixed(2)}
                                </span>
                                
                                {/* Roep de functie aan met de ID van het item om te verwijderen */}
                                <button 
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    -
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-total">
                        <strong>Totaal: €{total.toFixed(2)}</strong>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartSummary;