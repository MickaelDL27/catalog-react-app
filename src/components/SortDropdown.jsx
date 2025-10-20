import React from 'react';

function SortDropdown({ currentSort, onSortChange }) {
    return (
        <div className="sort-container">
            <label htmlFor="sortSelect">Sorteren op:</label>
            <select 
                id="sortSelect"
                value={currentSort} 
                onChange={(e) => onSortChange(e.target.value)}
            >
                <option value="name_asc">Naam (A-Z)</option>
                <option value="price_asc">Prijs (Laag &gt; Hoog)</option>
                <option value="price_desc">Prijs (Hoog &gt; Laag)</option>
            </select>
        </div>
    );
}

export default SortDropdown;