import React from 'react';

function FilterBar({ currentFilter, onFilterChange }) {
    const categories = ['all', 'Kleding', 'Electronica', 'Accessoires'];

    return (
        <div className="filter-bar">
            <h3>Filteren op categorie:</h3>
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => onFilterChange(category)}
                    className={category === currentFilter ? 'filter-btn active' : 'filter-btn'}
                >
                    {/* Zorg dat 'all' netjes wordt getoond */}
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            ))}
        </div>
    );
}
export default FilterBar;