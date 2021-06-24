import React,{ useState,useContext } from 'react'

import ToastContext from '../contexts/toastContext';
import ToastComponent from '../shared/toastComponent';

function DummyComponent() {
    const [ toast, setToast ] = useContext(ToastContext);
    const [en,setEn] = useState(false);
    const toastHandler =()=>{
        setToast({ message: 'hello', open: true});
        setEn(true);
    }

  return (
    <div>
        
      <button onClick={toastHandler}>Open toast warning</button>
      {en ? <ToastComponent/> : 'Disable toast'}
      {/* <ToastComponent/> */}
    </div>
  )
}

export default DummyComponent
