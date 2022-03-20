import myReducer from "./reducer";

function createStore(reducer) {
  let state;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    // Call reducer to get the new state
    state = reducer(state, action);
    // Notify the subscribers
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  function getState() {
    return state;
  }

  return {
    subscribe,
    getState,
    dispatch,
  };
}

export default createStore(reducer);