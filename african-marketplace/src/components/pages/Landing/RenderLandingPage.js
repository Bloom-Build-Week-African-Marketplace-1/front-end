import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RenderLandingPage(props) {
  return (
    <div>
      <h1>Africa Locally Owned Sales</h1>
      <h3>Where local products thrive with competitive prices.</h3>
      <div>
      <button><Link to="/shop">Shop!</Link></button>
        <p>
          Browse our listings of excellent local products.
        </p>
        <hr />
          <button><Link to="/login">Owner Login</Link></button>
        <p>
          Owners log in to compare prices, add items, and review your listings.
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
