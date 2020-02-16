import React, { useState, useEffect } from 'react';

const FavoriteButton = ({ url, addProduct, removeProduct }) => {
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
  }, [url, favorited]);

  const handleFavoriteClick = () => {
    let isFavorited = favorited;
    if (isFavorited) {
      removeProduct(productInfo);
    } else {
      addProduct();
    }
    setfavorited(!isFavorited);
    window.location.href = '#my-outfit';
  };
  return (
    <button className="add-to-favorites" onClick={handleFavoriteClick}>
      <i
        className={favorited ? 'fas fa-star' : 'far fa-star'}
        style={favoritedStyle}
      ></i>
    </button>
  );
};

export default FavoriteButton;
