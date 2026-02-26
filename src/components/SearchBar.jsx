import { useState, useRef } from 'react';
import '../styles/SearchBar.css';

export default function SearchBar({ onSearch, placeholder, suggestions = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);

    if (value.trim() === '') {
      setSuggestion('');
    } else {
      const match = suggestions.find(s =>
        s.toLowerCase().startsWith(value.toLowerCase())
      );
      
      if (match && match.toLowerCase() !== value.toLowerCase()) {
        setSuggestion(match);
      } else {
        setSuggestion('');
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab' && suggestion) {
      e.preventDefault();
      setSearchTerm(suggestion);
      onSearch(suggestion);
      setSuggestion('');
    } else if (e.key === 'ArrowRight' && suggestion) {
      setSearchTerm(suggestion);
      onSearch(suggestion);
      setSuggestion('');
    } else if (e.key === 'Escape') {
      e.preventDefault();
      clearSearch();
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearch('');
    setSuggestion('');
  };

  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        {suggestion && (
          <div className="search-suggestion" aria-hidden="true">
            <span className="suggestion-prefix">{searchTerm}</span>
            <span className="suggestion-text">{suggestion.slice(searchTerm.length)}</span>
          </div>
        )}
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="search-input"
          autoComplete="off"
        />
      </div>
      {searchTerm && (
        <button onClick={clearSearch} className="clear-btn" aria-label="Clear search">
          ✕
        </button>
      )}
    </div>
  );
}