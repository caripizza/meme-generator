import React from 'react';
import PropTypes from 'prop-types';

function MemeImgText({
  headerText,
  imageUrl,
  footerText,
  fontColor,
  fontSize,
  fontFamily
}) {
  const divStyles = {
    textAlign: 'center',
    display: 'grid',
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    height: '300px',
    backgroundPosition: 'center'
  };
  const fontColorStyle = () => {
    return {
      color: fontColor,
      fontSize: fontSize,
      fontFamily: fontFamily
    };
  };
  return (
    < >
      {(headerText || footerText || imageUrl) && <button>Get image</button>}
      <div style={divStyles} id="meme-id">
        <h3 style={fontColorStyle()}>{headerText}</h3>
        <h3 style={fontColorStyle()}>{footerText}</h3>
      </div>
    </>
  );
}

MemeImgText.propTypes = {
  headerText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  fontFamily: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired
};

export default MemeImgText;
