// import React from 'react'
// import UploadTest from './components/UploadTest'
// import csvtojsonV1 from "csvtojson/v1";
// import csv from "csvtojson";
// import { auth } from './firebase';
// import {useAuthState} from "react-firebase-hooks/auth";
// import Base from './components/Base';
// import Login from './components/Login';


// function App() {
//   const [user] = useAuthState(auth);
//   // const csvfilepath = "./files/sheet1";
//   // csv()
//   //   .fromFile(csvfilepath)
//   //   .then((jsonObj)=>{
//   //     console.log(jsonObj);
//   //   })
//   return (
//     <div>
//       {/* <UploadTest /> */}
//     {user ? <Base /> : <Login />}

//     </div>
//   )
// }

// export default App

import './App.css';
import Login from './components/Login';
import {auth} from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import Base from './components/Base';

function App() {
  const [user,loading] = useAuthState(auth);
  if(loading){
    return (
      <div>
        <h1>loading...</h1>
      </div>
    )
  }
  else{
    return (
      <div className="App">
          {user?<Base />:<Login/>}
      </div>
    );
  }
  
}

export default App;

