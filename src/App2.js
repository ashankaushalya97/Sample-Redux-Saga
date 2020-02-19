import React from "react";
import {useSelector,useDispatch} from 'react-redux';

function App2(){
    const list = useSelector(state=> state.list);
    const dispatch = useDispatch();

    return(
        <div>
            <h1>{list}</h1>
            <button onClick={()=> dispatch({type:'ADD'})}>INCREMENT</button>
            <button onClick={()=> dispatch({type:'REMOVE'})}>DECREMENT</button>
        </div>
    );
}

export default App2;