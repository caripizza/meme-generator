import React from 'react';
import PropTypes from 'prop-types';
import ImageUpload from './ImageUpload';
import MemeDisplay from './MemeDisplay';

function MemeApp({
  headerText,
  imageUrl,
  footerText,
  handleChange,
  handleUpload,
  memeToImage,
  fontColor,
  fontFamily,
  fontSize
}) {
  return (
    < >
      <h1>Meme Generator!</h1>
      <ImageUpload
        memeToImage={memeToImage}
        handleUpload={handleUpload}
      />
      <MemeDisplay
        headerText={headerText}
        imageUrl={imageUrl}
        footerText={footerText}
        handleChange={handleChange}
        memeToImage={memeToImage}
        fontColor={fontColor}
        fontFamily={fontFamily}
        fontSize={fontSize}
      />
    </>
  );
}

MemeApp.propTypes = {
  headerText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired,
  memeToImage: PropTypes.func.isRequired,
  fontColor: PropTypes.string.isRequired,
  fontFamily: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired
};

export default MemeApp;
