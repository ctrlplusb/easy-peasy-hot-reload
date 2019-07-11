import { action } from "easy-peasy";

export default {
  title: "Easy Peasy Starter",
  counter: 0,
  inc: action(state => {
    state.counter += 5;
  })
};
