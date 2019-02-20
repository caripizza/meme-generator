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
