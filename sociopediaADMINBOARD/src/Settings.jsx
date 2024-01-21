
import React from 'react';

const Settings = ({ settingsData }) => {
  return (
    <div>
      <h2>Settings</h2>
      <ul>
        {settingsData.map((setting, index) => (
          <li key={index}>{setting}</li>
        ))}
      </ul>
    </div>
  );
};

export default Settings;
