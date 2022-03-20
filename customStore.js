import myReducer from "./reducer";
function createStore(myReducer) {
  let state;
  let listeners = [];

  function dispatch(action) {
    // call reducer to get new state
    // notify subscribers
    state = myReducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  function getState() {
    return state;
  }
  return {
    getState,
    dispatch,
    subscribe,
  };
}

export default createStore(myReducer);
