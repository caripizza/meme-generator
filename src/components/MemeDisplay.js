import React from 'react';
import PropTypes from 'prop-types';
import './MemeDisplay.css';

function MemeDisplay({ headerText, imageUrl, footerText, handleChange }) {
  const divStyles = {
    textAlign: 'center',
    display: 'grid',
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    height: '300px',
    backgroundPosition: 'center'
  };
  return (
    < >
    <h1>Meme Generator</h1>
      <input type="text" name="headerText" value={headerText} onChange={handleChange}/>
      <input type="text" name="imageUrl" value={imageUrl} onChange={handleChange}/>
      <input type="text" name="footerText" value={footerText} onChange={handleChange}/>
      <div style={divStyles}>
        <h3>{headerText}</h3>
        <h3>{footerText}</h3>
      </div>
    </>
  );
}

MemeDisplay.propTypes = {
  headerText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default MemeDisplay;
