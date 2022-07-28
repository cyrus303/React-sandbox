import React from 'react';
import './Header.css';

function Header(props) {
  const { headerText, headerExpanded } = props.headerExpanded;

  return (
    <div className="header-container">
      <img
        className={`header-image ${
          headerExpanded ? 'head-image-expanded' : ' head-image-contracted'
        } `}
        src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
        alt="Header Image"
      />
      <div
        className={`head-text ${
          headerExpanded ? 'head-text-expanded' : ' head-text-contracted'
        } `}
      >
        Name It
      </div>
    </div>
  );
}

export default Header;
