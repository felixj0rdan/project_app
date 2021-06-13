import React,{useState} from 'react';
import Form from './Form';

import {auth} from "../firebase";
import {useAuthState} from 'react-firebase-hooks/auth';
// import UploadTest from './UploadTest';


function Base() {
    const [user,loading] = useAuthState(auth);
    // const [validMail,setValidMail] = useState(true);
    // if(user.email.includes('@skct.edu.in')){
    //     console.log("valid email");
        
    // }else{
    //     setValidMail(false);
    // }
    
    return (
        <div>
           {
               user.email.includes('@skct.edu.in') ? (
                <div>
                <header>
                    <button onClick={() => auth.signOut()}>Sign Out</button>
                </header>
                
                <Form />
                
            </div>
               ) :(
                <div>
                <h1>you are not authorized</h1>
                <button onClick={()=>auth.signOut()}>Signout</button>
            </div>
               )
           }
        </div>
    )
}

export default Base
