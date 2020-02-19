import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux"
import App2 from "./App2"
import createReduxSaga from "redux-saga";
import {incWatch} from "./saga/saga"

const sagaMiddleware = createReduxSaga();


// function productReducer(state=[],action){
//     switch(action.type){
//         case "insert":
//             return state;
//         default:
//             return state;    
//     }
// }
// function userReducer(state="",action){
//     switch(action.type){
//         case "updateUser":
//             return state;
//         default:
//             return state;    
//     }
// }

const initialState={
    list:0
}

function listReducer(state=initialState,action){
    // alert("list reducer");

    switch(action.type){
        
        case "ADD_ASYNC":
            // alert("state : "+ {state})
            return {list:state.list+1};
        case "REMOVE":
            return {list:state.list-1};
        default:
            return state;        
    }
}

// const allReducers = combineReducers({
//     product:productReducer,
//     user:userReducer,
//     list:listReducer
// })

// const action = {
//     type : 'changeState',
//     payload: {
//         newState: 'Hello'
//     }
// }
// store.dispatch(action);


// const store = createStore(allReducers,{
//     product:{name:"Auxenta"},
//     user:"Ashan",
//     list:1
// },window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const store = createStore(listReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(incWatch);

ReactDOM.render(<Provider store={store}> <App2 /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
