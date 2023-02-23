const express = require('express');
const { connectToDB } = require('./conn');

const app = express();

app.get('/',(req,res)=>{
  connectToDB((db)=>{
    db.query("select * from mytable",(err,result)=>{
      if(err) throw err;
      console.log(result);
      res.send("Connected to database : mydb");
    })
  })
})

app.listen(3000,()=>{
  console.log("server is running at port 3000");
})




































































// const { error } = require('console');
// const express = require('express');
// require("./conn");
// const path = require('path');
// const connection = require('./conn');
// const app =express();

// const port = process.env.PORT || 3000;

// const template_path = path.join(__dirname, "../public")
// app.use(express.static(template_path))

// app.use(express.json())
// app.use(express.urlencoded({extended:false}));

// app.get("", (req,res)=>{
//     res.send("Database Management System Tutotial.")
// })

// app.post('/submit', (req,res)=>{

    

//         const formData = req.body;
//         console.log(formData);
     
//        const createTableQuery = `
//          CREATE TABLE IF NOT EXISTS students (
//          id INT AUTO_INCREMENT PRIMARY KEY,
//          first_name VARCHAR(255) NOT NULL,
//          last_name VARCHAR(255) NOT NULL,
//          email VARCHAR(255) NOT NULL,
//          password VARCHAR(255) NOT NULL
//        )`
     
     
//          connection.query(createTableQuery,(error,results)=>{
//          if(error) throw error;
//          console.log('Table created: ', results);
//        });
     
//         connection.query("INSERT INTO students SET ?", {
//          first_name: formData.first_name,
//          last_name: formData.last_name,
//          email: formData.email,
//          password: formData.password
//        });
     
//        res.send("Form submitted successfully!");

    
// })



// app.listen(port, ()=>{
//     console.log("connection is live at port no. " + port);
// })