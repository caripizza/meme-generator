import React from 'react';
import PropTypes from 'prop-types';
import MemeInputs from './MemeInputs';
import MemeFonts from './MemeFonts';
import MemeImgText from './MemeImgText';

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
  // const divStyles = {
  //   textAlign: 'center',
  //   display: 'grid',
  //   backgroundImage: `url(${imageUrl})`,
  //   backgroundRepeat: 'no-repeat',
  //   height: '300px',
  //   backgroundPosition: 'center'
  // };
  // const fontColorStyle = () => {
  //   return {
  //     color: fontColor,
  //     fontSize: fontSize,
  //     fontFamily: fontFamily
  //   };
  // };
  return (
    // < >
    <form onSubmit={memeToImage}>
      <MemeFonts handleChange={handleChange}/>
      <MemeInputs headerText={headerText}
        imageUrl={imageUrl}
        footerText={footerText}
        handleChange={handleChange}
      />
      {/* {(headerText || footerText || imageUrl) && <button>Get image</button>}
      <div style={divStyles} id="meme-id">
        <h3 style={fontColorStyle()}>{headerText}</h3>
        <h3 style={fontColorStyle()}>{footerText}</h3>
      </div> */}
      <MemeImgText headerText={headerText}
        imageUrl={imageUrl}
        footerText={footerText}
        fontColor={fontColor}
        fontSize={fontSize}
        fontFamily={fontFamily}
      />
    </form>
    // </>
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
