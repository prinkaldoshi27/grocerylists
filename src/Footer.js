import React from 'react';
import './Content.css';

const Footer = ({ length }) => {
  return (
    <div>
      <p className={length === 0 ? 'no-items' : ''}>
        {length} Lists {length === 1 ? 'Item' : 'Items'}
      </p>
    </div>
  );
};

export default Footer;