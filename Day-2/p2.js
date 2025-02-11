const fs=require('fs');
//Read the data from the file

const data="I am new Data";
fs.readFile("./data.txt","utfa",(err,data)=>{if(err) throw err;
    console.log("File created successfully");
})