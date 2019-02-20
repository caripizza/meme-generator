import React from 'react';
import PropTypes from 'prop-types';

function MemeInputs({
  headerText,
  imageUrl,
  footerText,
  handleChange
}) {
  return (
    <fieldset>
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
        Enter image url:<br/>
        <input type="text"
          name="imageUrl"
          value={imageUrl}
          onChange={handleChange}
          placeholder="http://image-link.com"
        />
        <span>
          <a rel="noopener noreferrer" target="_blank"
            href="https://www.google.com/search?q=image+puppy&tbs=sur:f,isz:l&tbm=isch&source=lnt&sa=X&ved=0ahUKEwi2hJX50crgAhWSlp4KHfVQCb4QpwUIHw&biw=1440&bih=749&dpr=1#imgrc=_"
          >
            Image examples
          </a>
        </span>
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
    </fieldset>
  );
}

MemeInputs.propTypes = {
  headerText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default MemeInputs;
