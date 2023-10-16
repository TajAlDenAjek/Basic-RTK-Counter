
import { useSelector ,useDispatch} from 'react-redux'
import {counterAction} from '../store/counterSlice'
import { authActions } from '../store/authSlice';
import { RootState } from '../store';
function Counter() {

  
  const dispatch=useDispatch();
  const {counter}=useSelector((state:RootState)=>state.counter)
  const {login}=useSelector((state:RootState)=>state.auth)
  const {increase,decrease}=counterAction
  const {flip}=authActions
  return (
    <>
      <h1>Hello Redux Basic</h1>
      {login&&<h2>Counter: {counter}</h2>}
      <div className="buttonHolder">
        <button onClick={()=>dispatch(increase({number:5}))}>Increase +</button>
        <button onClick={()=>dispatch(decrease({number:1}))}>Decrease -</button>
      </div>
      <div>
        <button onClick={()=>dispatch(flip())}>Hide/ShowCounterNumber</button>
      </div>
    </>
  )
}

export default Counter