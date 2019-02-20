import React from 'react';
import PropTypes from 'prop-types';

function ImageUpload({ memeToImage, handleUpload }) {
  return (
    < >
      <form onSubmit={memeToImage}>
        <span>Upload your own image:</span>
        <input type="file"
          name="file"
          accept="image/png, image/jpeg"
          onChange={handleUpload}
        />
        <span id="success-msg"></span>
      </form>
    </>
  );
}

ImageUpload.propTypes = {
  memeToImage: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired
};

export default ImageUpload;
