import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const componentRoot = ReactDOM.createRoot(document.getElementById('root'));
componentRoot.render(
<React.StrictMode>
    <App />
  </React.StrictMode>,
);