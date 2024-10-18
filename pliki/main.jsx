// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// // Importujemy sklep Redux
// import { store } from "./store";
// // Importujemy Provider z react-redux
// import { Provider } from "react-redux";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // Zawijamy <App /> w Provider, przekazując sklep Redux
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
