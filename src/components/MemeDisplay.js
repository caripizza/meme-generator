import React from 'react';
import PropTypes from 'prop-types';

function MemeDisplay({
  headerText,
  imageUrl,
  footerText,
  handleChange,
  memeToImage,
  fontColor,
  fontFamily,
  fontSize
}) {
  const divStyles = {
    textAlign: 'center',
    display: 'grid',
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    height: '300px',
    backgroundPosition: 'center'
  };
  const fontColorList = ['purple', 'yellow', 'aqua'].map(fontC => {
    return (
      <option key={fontC} value={fontC}>{fontC}</option>
    );
  });
  const fontFamilyList = ['Courier', 'Arial', 'Times', 'Verdana'].map(fontF => {
    return (
      <option key={fontF} value={fontF}>{fontF}</option>
    );
  });
  const fontSizeList = ['45px', '50px', '55px', '60px'].map(fontS => {
    return (
      <option key={fontS} value={fontS}>{fontS}</option>
    );
  });
  const fontColorStyle = () => {
    return {
      color: fontColor,
      fontSize: fontSize,
      fontFamily: fontFamily
    };
  };
  return (
    < >
    <form onSubmit={memeToImage}>
      <select name="fontColor"
        onChange={handleChange}
      >
        {fontColorList}
      </select>
      <select name="fontFamily"
        onChange={handleChange}
      >
        {fontFamilyList}
      </select>
      <select name="fontSize"
        onChange={handleChange}
      >
        {fontSizeList}
      </select>
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
        <h3 style={fontColorStyle()}>{headerText}</h3>
        <h3 style={fontColorStyle()}>{footerText}</h3>
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
  fontColor: PropTypes.string.isRequired,
  fontFamily: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired
};

export default MemeDisplay;
