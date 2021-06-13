import React from 'react';
const csv=require('csvtojson');

// import sheet1 from "./files/sheet1";

const fs = require('fs');




function UploadTest() {
  // const csvFilePath = sheet1;

  csv()
  .fromFile('./files/sheet1.csv')
  .then((jsonObj)=>{
      console.log(jsonObj);
      /**
       * [
       * 	{a:"1", b:"2", c:"3"},
       * 	{a:"4", b:"5". c:"6"}
       * ]
       */ 
  })
  // const onChange = (e) => {
  //   const file = e.target.files[0];
  //   const storageRef = app.storage().ref()
  //   const fileRef = storageRef.child(file.name)
  //   fileRef.put(file).then(() => {
  //     console.log("Uploaded a file")
  //   })
  // }

  return (
    // <input type="file" onChange={onChange}/>
    <button>UploadTest</button>
  );
}

export default UploadTest;
