import { auth,provider } from "../firebase";
import React from 'react'


function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }
    return (
        <div>
            {/* <div className="container">
            <h1>Google Login</h1>
            <button className="btn-primary" onClick={signIn}>SignIn with Google</button>
            </div> */}
            <div class="card w-50 mx-auto mt-4 flex flex-column" >
  <div className="card-body">
    <h5 className="card-title fs-1 text">Google Sign-In</h5>
    
  <img src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip" className="card-img-top w-50 mx-auto " alt="..." /> 
  <br/>
    <button type="button" onClick={signIn} className="btn btn-success">Sign-In</button>
  </div>
</div>
        </div>
    )
}

export default Login