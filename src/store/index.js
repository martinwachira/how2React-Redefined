
import { createStore } from 'redux';
// import { routerMiddleware } from 'connected-react-router';
// import thunk from "redux-thunk" 
import { createRootReducer } from '../reducers';
// import { composeWithDevTools } from 'redux-devtools-extension';
// export const history = createBrowserHistory();
export const store = createStore(
  createRootReducer()
)