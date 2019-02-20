import React from 'react';
import PropTypes from 'prop-types';

function MemeFonts({
  handleChange
}) {
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
  return (
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
  );
}

MemeFonts.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default MemeFonts;
