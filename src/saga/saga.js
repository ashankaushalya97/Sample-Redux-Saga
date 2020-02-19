import {put,takeLatest,takeEvery,delay} from "redux-saga/effects";
// import {delay} from "redux-saga"

// export default function* helloSaga(){
//     alert("hello saga");
// }

function* incAsync(){
    console.log("ASYNC");
    yield delay(4000);
    yield put({type:'ADD_ASYNC'});
}


export function* incWatch(){
    alert("Watch");
    yield takeEvery('ADD',incAsync)
}
