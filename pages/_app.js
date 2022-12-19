// pages/_app.js
import '../styles.css'
import { CookiesProvider } from "react-cookie"
// import 'bootstrap/dist/css/bootstrap.min.css'

// export default function MyApp({ Component, pageProps }) {
//   console.log("gets invoked")
//   return (<CookiesProvider><Component {...pageProps} /></CookiesProvider>)
// }

import thunk from 'redux-thunk';
import reducers from '../social/client/src/reducers';
import { legacy_createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));
export default function MyApp({ Component, pageProps }) {
  console.log("gets invoked")
  return (
    // <CookiesProvider>
    //   <Component {...pageProps} />
    //   </CookiesProvider>
    <Provider store={store}>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </Provider>
  )
}

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { legacy_createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';

// import reducers from '../social/client/src/reducers';
// // import './index.css';

// import App from './App';
// import { CookiesProvider } from "react-cookie"
// const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));


// export default function MyApp({ Component, pageProps }) {
//   console.log("gets invoked")
//   // return (<CookiesProvider><Component {...pageProps} /></CookiesProvider>)
//   if (typeof window !== 'undefined') {
//     return (
//       <Provider store={store}>
//         <CookiesProvider>
//           <App />
//         </CookiesProvider>
//       </Provider>
//       // ,
//       // document.getElementById('root')
//     )
//   }
// };
