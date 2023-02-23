const mysql = require('mysql2')

const connectToDB = (callback)=>{

    // Create connection to MySQL Server
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'sanjit',
        password: 'noPassword'
    });
    
    // Connect to MySQL Server
    connection.connect((err)=>{
        
        if(err) throw err;
        
        // Check if database exits
        connection.query("SHOW DATABASES 'mydb'",(err,result)=>{
            if(err) throw err;
    
            // if database doesnot exist,create it
            if(result.length===0){
                connection.query("create database mydb",(err,result)=>{
                    if(err) throw err;
                    console.log("Database Created successfully");
                })
            }
            
    
            // connect to mydb database
            const db = mysql.createConnection({
                host:'localhost',
                user:'sanjit',
                password:'noPassword',
                database: 'mydb'
            })
    
            //close connection to mysql server
            connection.end();
    
            //pass the mydb connection to the call back function
            callback(db)
        })
    })
}

module.exports = { connectToDB };