import React from 'react';

const UnitToggle = ({ unit, setUnit }) => (
  <div className="unit-toggle">
    <button onClick={() => setUnit('metric')} disabled={unit === 'metric'}>°C</button>
    <button onClick={() => setUnit('imperial')} disabled={unit === 'imperial'}>°F</button>
  </div>
);

export default UnitToggle;
