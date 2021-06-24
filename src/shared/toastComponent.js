import React,{useState,useContext} from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import ToastContext from '../contexts/toastContext';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function ToastComponent() {
    
    
const toasts = useContext(ToastContext)[0]
console.log(useContext(ToastContext)[0])
const [ toast, setToast ] = useContext(ToastContext);

const handleClose = (event, reason) =>{
    
    if (reason === 'clickaway') {
        return;
      }
      setToast({ message: 'hello', open: false});
    //setOpen(false);
}

const [open,setOpen] = useState(false);
// debugger;
  return (
    <div>
        <h3>Outer : </h3>
        <Snackbar open={toasts.open} onClose={handleClose}>
          <Alert onClose={handleClose}>
            {toasts.message}
          </Alert>
        </Snackbar>
    </div>
      
    
  )
}

export default ToastComponent
