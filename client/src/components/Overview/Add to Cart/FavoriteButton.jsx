import React, { useState, useEffect } from 'react';

const FavoriteButton = ({ url }) => {
  const [favorited, setfavorited] = useState(false);
  const favoritedStyle = favorited ? { color: 'var(--star-color)' } : {};

  useEffect(() => {
    setfavorited(false);
    let cache = JSON.parse(localStorage.getItem('outfit')) || [];
    for (let product of cache) {
      if (product[0].id === Number(url)) {
        setfavorited(true);
        break;
      }
    }
  }, [url]);
  return (
    <button
      className="add-to-favorites"
      onClick={() => {
        setfavorited(prev => !prev);
      }}
    >
      <i
        className={favorited ? 'fas fa-star' : 'far fa-star'}
        style={favoritedStyle}
      ></i>
    </button>
  );
};

export default FavoriteButton;
