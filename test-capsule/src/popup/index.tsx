console.log('start')
// import './polyfills';
// @ts-ignore

// window.global = {} as any
// (function () {
//   // Add the process shim at the beginning
//   if (typeof window.process === 'undefined') {
//     var process = {
//       env: {
//         NODE_ENV: 'production' // or 'development', depending on your needs
//       }
//     };
//     window.process = process as any;
//   }
  

//   // Your library code, including imports, exports, etc.
//   // ...

// })();

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Popup'
import './index.css'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
