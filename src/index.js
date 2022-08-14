import reportWebVitals from "./reportWebVitals";
import { React, ReactDOM, Provider } from "libraries";
import { store } from "modules";
import "./index.css";
import { Pages } from "components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Pages />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
