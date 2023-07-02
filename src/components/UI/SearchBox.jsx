import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchQuery, clearSearchHistory } from '../../redux/slices/searchHistorySlice';
import { motion } from "framer-motion";
import '../../styles/searchbox.css'

const SearchBox = ({onClick}) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const searchInputRef = useRef(null);
  const searchHistory = useSelector(state => state.searchHistory);

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      e.target.blur();
    }
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // dispatch(setSearchQuery(searchTerm));
    dispatch(addSearchQuery(searchTerm));
    searchInputRef.current.blur()
    navigate(`/search?q=${searchTerm}`);
  };

  const handleClearSearchHistory = () => {
    dispatch(clearSearchHistory());
  };

  const location = useLocation()
  console.log(location.search)
  useEffect(()=>{
    if (!location.search) {
      setSearchTerm('');
    } else {
      setSearchTerm(decodeURIComponent(location.search.slice(3)))
    }
  }, [location])

  const [historyStyle, setHistoryStyle] = useState({display: 'none'});
  const handleClick = () => {
    if (searchHistory && searchHistory.length > 0) {
        setHistoryStyle({display: 'flex'});
    }
  }
  const handleBlur = () => {
      setHistoryStyle({display: 'none'});
  }


  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Whom are you looking for?"
        value={searchTerm}
        onChange={handleSearch}
        onClick={() => {
          onClick();
          handleClick();
        }}
        onFocus={() => {
          onClick();
          handleClick();
        }}
        onTouchStart={() => {
          onClick();
          handleClick();
        }}
        onBlur={() => {
          setTimeout(() => {
            handleBlur();
          }, 150);
        }}
        ref={searchInputRef}
      />
      <motion.button type="submit" whileHover={{scale:1.2}}>
        <i className="ri-search-line"></i>
      </motion.button>
      {searchHistory && searchHistory.length > 0 && (
        <div className="search-history" style={historyStyle}>
          <div className='history-list'>
            <p>RECENT SEARCHES</p>
          <ul>
            {searchHistory.map((searchQuery, index) => (
              
              <li key={index}>
                {index > 0}
                <a href={`search?q=${searchQuery}`} title={searchQuery}>{searchQuery.length > 20 ? `${searchQuery.slice(0, 17)}...` : searchQuery}</a>
              </li>
              
            ))}
          </ul>
          </div>
          <button className='clear-history' onClick={handleClearSearchHistory} onTouchStart={handleClearSearchHistory}>
< i onClick={handleClearSearchHistory} onTouchStart={handleClearSearchHistory} className="ri-close-line"></i><span onClick={handleClearSearchHistory} onTouchStart={handleClearSearchHistory}>Clear all</span></button>
        </div>
      )}
    </form>
  );
};

export default SearchBox;

