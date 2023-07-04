import React from 'react';

const LanguageSelect = ({ selectedLanguage, changeLanguage }) => {
  return (
    <div className='languages'>
    <select value={selectedLanguage} onChange={changeLanguage}>
      <option value="th">Thai</option>
      <option value="en">English</option>
      <option value='vn'>Vietnamese</option>
    </select>
  </div>
  );
};

export default LanguageSelect;
