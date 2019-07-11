import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "easy-peasy";
import store from "./store";
import App from "./components/app";

import "./styles.css";

const render = Component =>
  ReactDOM.render(
    <StoreProvider store={store}>
      <Component />
    </StoreProvider>,
    document.getElementById("root")
  );

render(App);

if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept("./App", () => {
      const NextApp = require("./App").default;
      render(NextApp);
    });
  }
}
