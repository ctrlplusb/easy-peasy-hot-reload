import { createStore } from "easy-peasy";
import model from "./model";

const store = createStore(model);

if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept("./model", () => {
      const newModel = require("./model").default;
      store.reconfigure(newModel); // 👈 Here is the magic
    });
  }
}

export default store;
