import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RenderLandingPage(props) {
  return (
    <div className="landing-page">
      <img src="/assets/AfricanMarketCover.jpg" />
      <div className="top-content">
        <div className="shop-cta">
          <h1>
            Bring The Markets <br /> Directly To You!
          </h1>
          <h3>Where local products thrive with competitive prices.</h3>
          <div>
            <button>
              <Link to="/shop">Shop</Link>
            </button>
            <button>
              <Link to="/login">Owner Login</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RenderLandingPage;
