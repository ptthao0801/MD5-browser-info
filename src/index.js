import React from 'react';
import ReactDOM from 'react-dom/client';

const element = <h4>Browser's details: {navigator.userAgent}</h4>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  element
);

