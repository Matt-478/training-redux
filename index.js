import redux from "redux"
const createStore = redux.createStore


const BUY_CAKE = "BUY_CAKE"

// ACTION creator - creates an action
function buyCake () {
  return {
    type: BUY_CAKE,
    info: "First redux action"
  }
}

// STATE - asimple object
// dispatch(action) allows state to be updated
const initialState = {
  numOfCakes: 10
}

// REDUCER
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes -1
    }

    default: return state
  }
}

// holds state;
const store = createStore(reducer)

// gets state
console.log("intial state", store.getState())

const unsubscribe = store.subscribe(() => console.log("updated state", store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()