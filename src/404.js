import React, { useEffect } from 'react';

const NotFoundPage = () => {
  useEffect(() => {
    document.body.classList.remove('404-page');
  }, []);

  return (
    <div className="pagenotfound-wrapper">
      <img className="fourOfour" src="/404_page/404_image.png" alt="404" />
      <h2>We couldn&apos;t find what you were looking for</h2>
      <img src="/404_page/pcg_logo.png" alt="404" />
      <a href="/">Home</a>
    </div>
  );
};

export default NotFoundPage;
