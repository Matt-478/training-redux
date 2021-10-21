import redux from "redux"
const createStore = redux.createStore


// STATE - asimple object
// // dispatch(action) allows state to be updated
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20
// }

const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCreams: 20
}

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

// action
function buyCake () {
  return {
    type: BUY_CAKE,
    info: "First redux action"
  }
}

// action
function buyIceCream() {
  return {
    type: BUY_ICECREAM
  }
}

// REDUCER
const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes -1
    }
    default: return state
  }
}

const IceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams -1
    }
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
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()