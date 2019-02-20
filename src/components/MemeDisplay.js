import React from 'react';
import PropTypes from 'prop-types';
import './MemeDisplay.css';

function MemeDisplay({
  headerText,
  imageUrl,
  footerText,
  handleChange,
  memeToImage,
  // saveFile
}) {
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
    <form onSubmit={memeToImage}>
      <input type="text"
        name="headerText"
        value={headerText}
        onChange={handleChange}
        placeholder="enter heading text"
      />
      <input type="text"
        name="imageUrl"
        value={imageUrl}
        onChange={handleChange}
        placeholder="http://image-link.com"
      />
      <input type="text"
        name="footerText"
        value={footerText}
        onChange={handleChange}
        placeholder="enter footer text"
      />
      {(headerText || footerText || imageUrl) && <button>Get image</button>}
      <div style={divStyles} id="meme-id">
        <h3>{headerText}</h3>
        <h3>{footerText}</h3>
      </div>
    </form>
    </>
  );
}

MemeDisplay.propTypes = {
  headerText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  memeToImage: PropTypes.func.isRequired,
  // saveFile: PropTypes.func.isRequired
};

export default MemeDisplay;
