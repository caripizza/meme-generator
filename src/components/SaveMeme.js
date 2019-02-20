import React from 'react';
import PropTypes from 'prop-types';

function SaveMeme({ meme, saveFile }) {
  return (
    < >
      {meme && <button onClick={saveFile}>Save file</button>}
      {meme && <img src={meme}/>}
    </>
  );
}

SaveMeme.propTypes = {
  meme: PropTypes.string.isRequired,
  saveFile: PropTypes.func.isRequired
};

export default SaveMeme;
