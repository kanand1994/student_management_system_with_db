import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../features/studentSlice';
import { Search } from 'lucide-react';

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };

    return (
        <div className="search-bar">
            <Search size={20} />
            <input
                type="text"
                placeholder="Search by name..."
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchBar;
