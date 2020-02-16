import React, { useState } from 'react';

const FavoriteButton = () => {
  const [favorited, setfavorited] = useState(false);
  const favoritedStyle = favorited ? { color: 'var(--star-color)' } : {};
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
