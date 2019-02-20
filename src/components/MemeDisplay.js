import React from 'react';
import PropTypes from 'prop-types';
import MemeInputs from './MemeInputs';

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
      <fieldset>
        <label>
      Choose a font color:<br/>
          <select name="fontColor"
            onChange={handleChange}
          >
            {fontColorList}
          </select>
        </label>
        <br/>
        <label>
        Choose a font family:<br/>
          <select name="fontFamily"
            onChange={handleChange}
          >
            {fontFamilyList}
          </select>
        </label>
        <br/>
        <label>
        Choose a font size:<br/>
          <select name="fontSize"
            onChange={handleChange}
          >
            {fontSizeList}
          </select>
        </label>
      </fieldset>
      <MemeInputs headerText={headerText}
        imageUrl={imageUrl}
        footerText={footerText}
        handleChange={handleChange}
      />
      {/* <fieldset>
        <label>
        Enter header text:<br/>
          <input type="text"
            name="headerText"
            value={headerText}
            onChange={handleChange}
            placeholder="enter heading text"
          />
        </label>
        <br/>
        <label>
        Enter image url (http only):<br/>
          <input type="text"
            name="imageUrl"
            value={imageUrl}
            onChange={handleChange}
            placeholder="http://image-link.com"
          />
        </label>
        <br/>
        <label>
        Enter footer text:<br/>
          <input type="text"
            name="footerText"
            value={footerText}
            onChange={handleChange}
            placeholder="enter footer text"
          />
        </label>
      </fieldset> */}
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
