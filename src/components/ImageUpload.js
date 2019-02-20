import React from 'react';
import PropTypes from 'prop-types';

function ImageUpload({ memeToImage, handleUpload }) {
  return (
    < >
      <form onSubmit={memeToImage}>
        <p>Upload your own image:</p>
        <input type="file"
          name="file"
          accept="image/png, image/jpeg"
          onChange={handleUpload}
        />
        <p id="success-msg"></p>
        <button>Upload</button>
      </form>
    </>
  );
}

ImageUpload.propTypes = {
  memeToImage: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired
};

export default ImageUpload;
