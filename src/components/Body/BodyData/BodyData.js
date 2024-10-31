import React from 'react';
import './BodyData.css';
import SearchBar from '../SearchBar/SearchBar.js'

const BodyData = () => {

    return (
        <div className="body-data">
            <SearchBar placeholder="Search subject..."/>
            <SearchBar placeholder="Search class name or CRN..."/>
        </div>
    );
};

export default BodyData;