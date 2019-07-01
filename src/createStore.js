export default function createStore(reducer) {
  // add your code here
}

function createStore(reducer) {
  let state;
  function dispatch(action) {
    state = reducer(state, action)
    render();
  };

  function getState() {
    return state;
  };

  return {
    dispatch, getState
  };

  let store = createStore(countReducer)
  store.dispatch({type: '@@INIT'})

};  //end of createStore


function render() {
  const container = document.getElementById('container');
}
