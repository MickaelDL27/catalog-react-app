import React, { useState } from 'react';
import productsData from './data/products';
import ProductList from './components/ProductList'; 
import CartSummary from './components/CartSummary';
import FilterBar from './components/FilterBar'; 
import SortDropdown from './components/SortDropdown'; 
import './App.css'; 

function App() {
    // -----------------------------------------------------------
    // 1. STATE DEFINITIES
    // -----------------------------------------------------------
    const [products, setProducts] = useState(productsData); 
    const [cart, setCart] = useState([]); 
    const [currentFilter, setCurrentFilter] = useState('all'); 
    const [currentSort, setCurrentSort] = useState('name_asc'); 
    
    
    // -----------------------------------------------------------
    // 2. FUNCTIES VOOR STATE UPDATES
    // -----------------------------------------------------------
    
    const handleFilterChange = (newFilter) => {
        setCurrentFilter(newFilter);
    };
    
    const handleSortChange = (newSort) => {
        setCurrentSort(newSort); 
    };

    const addToCart = (productToAdd) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === productToAdd.id);
            
            if (existingItem) {
                return prevCart.map(item => 
                    item.id === productToAdd.id 
                    ? { ...item, quantity: item.quantity + 1 } 
                    : item
                );
            } else {
                return [...prevCart, { ...productToAdd, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === productId);

            if (!existingItem) return prevCart; 

            if (existingItem.quantity > 1) {
                return prevCart.map(item =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                );
            } else {
                return prevCart.filter(item => item.id !== productId);
            }
        });
    };
    
    // -----------------------------------------------------------
    // 3. LOGICA VOOR FILTEREN EN SORTEREN
    // -----------------------------------------------------------

    // A. FILTEREN
    const filteredProducts = products.filter(product => {
        const filterLower = currentFilter.toLowerCase();
        const categoryLower = product.category.toLowerCase();
        
        return filterLower === 'all' || categoryLower === filterLower;
    });

    // B. SORTEREN
    const sortedProducts = [...filteredProducts]; 

    switch (currentSort) {
        case 'price_asc':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price_desc':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name_asc': 
        default:
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }


    // -----------------------------------------------------------
    // 4. RENDERING VAN DE COMPONENTEN
    // -----------------------------------------------------------
    
    return (
        <div className="container">
            <h1>Onze Producten (React Catalogus)</h1>
            
            <CartSummary 
                cart={cart} 
                removeFromCart={removeFromCart} 
            /> 

            <div className="controls-bar">
                <FilterBar 
                    currentFilter={currentFilter} 
                    onFilterChange={handleFilterChange} 
                />
                
                <SortDropdown 
                    currentSort={currentSort} 
                    onSortChange={handleSortChange} 
                />
            </div>

            <ProductList products={sortedProducts} addToCart={addToCart} />
        </div>
    );
}

export default App;