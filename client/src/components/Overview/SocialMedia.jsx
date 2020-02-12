import React from 'react';

const SocialMedia = ({ url }) => {
  return (
    <div className="social-media">
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=example.org"
        target="_blank"
        className="fab fa-facebook"
      ></a>
      <a
        className="fab fa-twitter"
        href="https://twitter.com/intent/tweet?text=Check%20out%20this%20product!&hashtags=f,e,c"
      ></a>
      {/* <a href="#" className="fab fa-twitter"></a> */}
      {/* <a href="#" className="fab fa-pinterest"></a> */}
      <a
        className="fab fa-pinterest"
        href="https://www.pinterest.com/pin/create/button/"
      ></a>
    </div>
  );
};

export default SocialMedia;
