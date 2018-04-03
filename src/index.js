import React from "react";
import ReactDOM from "react-dom";

import Reset from 'styles/reset'
import App from 'containers/App.js'

// Reset is just a simple div that we use to inject our css reset
// Once we've rendered our component to reset our css, we can render the app
ReactDOM.render(
  <Reset>
    <App />
  </Reset>,
  document.getElementById('root'),
)
