/** @format */

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { AuthContextProvider } from "./components/Store/Auth-context";
import ReduxStore from "./Redux-store/ReduxStore";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

//React BootStrap configuration
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={ReduxStore}>
    
      <BrowserRouter>
        <App />
      </BrowserRouter>
    
  </Provider>
);
