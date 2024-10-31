import React from 'react';
import './BodyData.css';
import SearchBar from '../SearchBar/SearchBar.js'

const BodyData = () => {

    return (
        <div className="body-data">
        <div className="body-search-bars">
            <SearchBar placeholder="Search subject..."/>
            <SearchBar placeholder="Search class name or CRN..."/>
        </div>
        <div className="body-grid">
            
        </div>
        </div>
    );
};

export default BodyData;