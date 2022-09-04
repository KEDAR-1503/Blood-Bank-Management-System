const express=require("express")
const mysql= require('mysql');
const cors = require('cors')
const fast2sms = require('fast-two-sms')
require('dotenv').config()
let AWS = require('aws-sdk');
const path = require("path");


const app= express()
let port;

app.use(cors())

app.use(express.json());

//run build when development mode is false ie:Production
if(process.env.DEVELOPMENT_MODE.trim()==="false"){
    app.use(express.static('build')) // build served statically from build folder
}

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey:process.env.AWS_ACCESS_SECRET_KEY,
    region: 'ap-south-1'});


let connection = mysql.createConnection({
    database :"BLOODBANK",
    host     : process.env.AWS_RDS_HOST,
    user     : 'admin',
    password : process.env.AWS_RDS_PASSWORD,
    port     : '3306'
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log("Connected to SQL Server")
});




app.get("/test",(req,res)=>{
    res.send("200 OK!")
})


app.post("/hospitalreg",(req,res)=>{
    let data = req.body.payload
    let {license, name, state, city, address, isgov, contact, username, password,} = data
    console.log(data)
    if(isgov.trim()==="Private"){
        isgov=0
    }
    else {
        isgov=1
    }
    let sqlquerry= "INSERT INTO HOSPITAL VALUES (?,?,?,?,?,?,?,?,?,?)"
    connection.query(sqlquerry, [,license,name,state,city,address,isgov,contact,username,password],function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.send("Hospital Successfully Registered")
    });

})

app.post("/bloodbankreg",(req,res)=>{
    let data = req.body.payload
    console.log(data)
    let {license, name, state, city, address, isgov, contact, username, password,} = data
    if(isgov.trim()==="Private"){
        isgov=0
    }
    else {
        isgov=1
    }
    let sqlquerry= "INSERT INTO BLOODBANK VALUES (?,?,?,?,?,?,?,?,?,?)"
    connection.query(sqlquerry, [,license,name,state,city,address,isgov,contact,username,password],function (err, outersresult) {
        if (err) throw err;
        console.log("lc no :",license)
        console.log("1 record inserted");
        connection.query( "SELECT BBID FROM BLOODBANK WHERE BLCNO=(?)", [license],function (err, result) {
            console.log(result)
            if (err) throw err;
            connection.query(`CALL addNewBloodBanktoInventory(${result[0].BBID})`,function (err, result) {
                if (err) throw err;
                console.log("Stored Procedure success");
                res.send("BloodBank Successfully Registered")
            });
        });





    });

})





app.post("/login",(req,res)=>{
    let data =req.body.payload
    let {type,username,password} = data
    console.log(data)
    let sqlquerry;
    if(type==="hospitalType"){
        sqlquerry= `SELECT HID,HLNO,HNAME,HSTATE,HADDRESS,HCITY,ISGOV,HPHONE FROM HOSPITAL WHERE HUSERNAME=\"${username}\" AND HPASSWORD=\"${password}\"`

    }
    else {
        sqlquerry= `SELECT BBID,BLCNO,BBNAME,BBSTATE,BBADDRESS,BBCITY,ISGOV,BBPHONE FROM BLOODBANK WHERE BBUSERNAME=\"${username}\" AND BBPASSWORD=\"${password}\"`

    }



    connection.query(sqlquerry,function (err, result) {
        if (err) throw err;


        if(result.length==0) {
            res.send("Username or Password Wrong")
        }
        else {
            res.json({
                status : 'Success',
                payload : result[0]
            })
        }
        // res.send("BloodBank Successfully Registered")
    });

})


app.post("/addDonor",(req,res)=>{
    let data= req.body.payload
    console.log(data)
    let {fname,lname,age,gender,contact,dob,aadhar,state,city,address,bgroup}=data
    let sqlquerry= "INSERT INTO DONOR VALUES (?,?,?,?,?,?,?,?,?,?,?,?)"
    connection.query(sqlquerry, [,fname,lname,gender,age,aadhar,bgroup,state,city,address,dob,contact],function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.send("Record Inserted Sucessfully")
    });


})

app.post("/addPatient",(req,res)=>{
    let data= req.body.payload
    console.log(data)
    let {fname,lname,age,gender,contact,dob,aadhar,state,city,address,bgroup,hid}=data
    let sqlquerry= "INSERT INTO PATIENT VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)"
    connection.query(sqlquerry, [,fname,lname,age,gender,aadhar,bgroup,state,city,address,dob,contact,hid],function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.send("Record Inserted Sucessfully")
    });


})

app.get("/getDonor",(req,res)=>{
    sqlquerry="SELECT * FROM DONOR"

    connection.query(sqlquerry,function (err, result) {
        if (err) throw err;
        console.log(result)
        res.send(result)
        // res.send("BloodBank Successfully Registered")
    });
})

app.get("/getPatient",(req,res)=>{
    sqlquerry="SELECT * FROM PATIENT"

    connection.query(sqlquerry,function (err, result) {
        if (err) throw err;
        console.log(result)
        res.send(result)
        // res.send("BloodBank Successfully Registered")
    });
})

app.post("/searchDonor",(req,res)=>{
    let data=req.body.payload
    sqlquerry=`SELECT * FROM DONOR WHERE ${data.searchtype}=\"${data.value}\"`

    connection.query(sqlquerry,function (err, result) {
        if (err) throw err;
        console.log(result)
        res.send(result)
        // res.send("BloodBank Successfully Registered")
    });
})

app.post("/deleteDonor",(req,res)=>{
    let data=req.body.payload
    sqlquerry=`DELETE FROM DONOR WHERE ${data.searchtype}=\"${data.value}\"`

    connection.query(sqlquerry,function (err, result) {
        if (err) throw err;
        res.send("Delete Successfull")
        // res.send("BloodBank Successfully Registered")
    });
})


app.post("/searchPatient",(req,res)=>{
    let data=req.body.payload
    sqlquerry=`SELECT * FROM PATIENT WHERE ${data.searchtype}=\"${data.value}\"`

    connection.query(sqlquerry,function (err, result) {
        if (err) throw err;
        console.log(result)
        res.send(result)
        // res.send("BloodBank Successfully Registered")
    });
})

app.post("/deletePatient",(req,res)=>{
    let data=req.body.payload
    sqlquerry=`DELETE FROM PATIENT WHERE ${data.searchtype}=\"${data.value}\"`

    connection.query(sqlquerry,function (err, result) {
        if (err) throw err;
        res.send("Delete Successfull")
        // res.send("BloodBank Successfully Registered")
    });
})


app.post("/updateDonor",(req,res)=>{
    let data=req.body.payload
    sqlquerry=`UPDATE DONOR SET ${data.searchtype} =\"${data.value}\" WHERE DID=\"${data.DID}\"`

    connection.query(sqlquerry,function (err, result) {
        if (err) throw err;
        res.send("Update Successfull")
        // res.send("BloodBank Successfully Registered")
    });
})

Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

app.post("/addBloodDonation",(req,res)=>{
    let data= req.body.payload
    console.log(data)
    let {did,ddate ,dweight,dqty,dbgroup,anymedcon ,mstaffname ,mstaffrole,bbid}=data
    const date = new Date(ddate);
    let expdate = date.addDays(45)
    console.log(expdate)
    let sqlquerry= "INSERT INTO BLOOD_DONATION VALUES (?,?,?,?,?,?,?,?,?,?,?)"
    connection.query(sqlquerry, [, dqty,dbgroup,dweight,ddate ,anymedcon ,mstaffname ,mstaffrole,expdate,did,bbid],function (err, result) {
        if (err) throw err;

        let bloodStock = bloodStockType(dbgroup)
        console.log(bloodStock)
        connection.query(`SELECT ${bloodStock} FROM BLOOD_INVENTORY WHERE BBID=(?)`,[bbid],function (err, result) {
            if (err) throw err;
            console.log(result)
            let currentBloodStock = Number(result[0][bloodStock]) + Number(dqty)
            console.log("current  value", currentBloodStock)

            connection.query(`UPDATE BLOOD_INVENTORY SET ${bloodStock}=${currentBloodStock}  WHERE BBID=(?) `, [bbid], function (err, result) {
                if (err) throw err;
                console.log(result)
                res.send("Record Inserted Sucessfully")
            });
        });
    });
})


app.get("/getBloodDonation",(req,res)=>{
    sqlquerry="SELECT * FROM BLOOD_DONATION"

    connection.query(sqlquerry,function (err, result) {
        if (err) throw err;
        console.log(result)
        res.send(result)
    });
})


const bloodStockType=(bgroup)=>{
  if(bgroup==="B+"){
      return("BPSTOCK")
  }
  else if (bgroup==="B-"){
        return("BNSTOCK")
    }
  else if(bgroup==="A+"){
        return("APSTOCK")
    }
  else if(bgroup==="A-"){
      return ("ANSTOCK")
  }
  else if(bgroup==="AB+"){
      return ("ABPSTOCK")
  }
  else if(bgroup==="AB-"){
      return ("ABNSTOCK")
  }
  else if(bgroup==="O+"){
      return ("OPSTOCK")
  }
  else if(bgroup==="O-"){
      return ("ONSTOCK")
  }
}

app.post("/addBloodReceive",(req,res)=>{
    let data= req.body.payload
    console.log(data)
    let {pid,qty,date,bgroup,bbid}=data
    connection.query(`SELECT HID FROM PATIENT WHERE PID=\"${pid}\"`,function (err, result) {
        if (err) throw err;
        console.log(result)
        let sqlquerry= "INSERT INTO BLOOD_RECEIVE VALUES (?,?,?,?,?,?,?)"
        connection.query(sqlquerry, [,qty,bgroup,date,result[0].HID,pid,bbid],function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            let bloodStock = bloodStockType(bgroup)
            console.log(bloodStock)
            connection.query(`SELECT ${bloodStock} FROM BLOOD_INVENTORY WHERE BBID=(?)`,[bbid],function (err, result) {
                if (err) throw err;
                console.log(result)
                let currentBloodStock=Number(result[0][bloodStock])-Number(qty)
                console.log("current  value",currentBloodStock)

                connection.query(`UPDATE BLOOD_INVENTORY SET ${bloodStock}=${currentBloodStock}  WHERE BBID=(?) `,[bbid],function (err, result) {
                    if (err) throw err;
                    console.log(result)
                    res.send("Record Inserted Sucessfully")
                });

            });





        });

    });




})

app.get("/getReceive",(req,res)=>{
    sqlquerry="SELECT * FROM BLOOD_RECEIVE"

    connection.query(sqlquerry,function (err, result) {
        if (err) throw err;
        console.log(result)
        res.send(result)
        // res.send("BloodBank Successfully Registered")
    });
})



app.post("/sendmessage",(req,res)=>{
    console.log(req.body.payload)
    let nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bloodmanagementdbms@gmail.com',
            pass: 'miniproject@2021'
        }
    });
    var mailOptions = {
        from: 'bloodmanagementdbms@gmail.com',
        to: req.body.payload.email,
        subject: 'Sending Email using Node.js from Blood Bank Management System',
        text: req.body.payload.message,
        // html: '<h1>Thank You</h1><p>Blood Bank</p>'
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            let options = {authorization : process.env.APIKEY , message : req.body.payload.message ,  numbers : [req.body.payload.number]}
            fast2sms.sendMessage(options).then(response=>{
                console.log(response)
                res.send("Message Sent")
            }) //Asynchronous Function.
        }
    });






})


app.get("/awssend",(req,res)=>{


// Create sendEmail params
    let params = {
        Destination: { /* required */
            CcAddresses: [
                'bloodmanagementdbms@gmail.com',
                /* more items */
            ],
            ToAddresses: [
                'rnk2214@gmail.com',
                /* more items */
            ]
        },
        Message: { /* required */
            Body: { /* required */
                Html: {
                    Charset: "UTF-8",
                    Data: "HTML_FORMAT_BODY"
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "TEXT_FORMAT_BODY"
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'Test email'
            }
        },
        Source: 'rnk2214@gmail.com', /* required */
        ReplyToAddresses: [
            'rnk2214@gmail.com',
            /* more items */
        ],
    };

// Create the promise and SES service object
    var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
    sendPromise.then(
        function(data) {
            console.log(data.MessageId);
            res.send("Message Sent Check Email")
        }).catch(
        function(err) {
            console.error(err, err.stack);
        });
})


// / async..await is not allowed in global scope, must use a wrapper

app.post("/sendInventory",(req,res)=>{
    sqlquerry="SELECT * FROM BLOOD_INVENTORY WHERE BBID=(?)"

    connection.query(sqlquerry,[req.body.bbid],function (err, result) {
        if (err) throw err;
        console.log(result)
        res.send(result)
        // res.send("BloodBank Successfully Registered")
    });
})




app.post("/findblooduser",(req,res)=>{
    let data=req.body.payload
    // let sqlquerry=`SELECT B.BBNAME,BBADDRESS,BBPHONE,BBCITY,BBSTATE FROM BLOOD_INVENTORY I JOIN BLOODBANK B ON B.BBID=I.BBID WHERE I.BPSTOCK>0 AND BBSTATE=\"${data.state}\" AND BBCITY=\"${data.city}\"`
    let sqlquerry;
    console.log(data)
    let reqblood=bloodStockType(String(data.bgroup))
    console.log("req",reqblood)

    if(reqblood=="BPSTOCK"){
        sqlquerry=`SELECT B.BBNAME,BBADDRESS,BBPHONE,BBCITY,BBSTATE FROM BLOOD_INVENTORY I JOIN BLOODBANK B ON B.BBID=I.BBID WHERE I.BPSTOCK>0 AND BBSTATE=\"${data.state}\" AND BBCITY=\"${data.city}\"`
    }
    else if(reqblood=="BNSTOCK"){
        sqlquerry=`SELECT B.BBNAME,BBADDRESS,BBPHONE,BBCITY,BBSTATE FROM BLOOD_INVENTORY I JOIN BLOODBANK B ON B.BBID=I.BBID WHERE I.BPSTOCK>0 AND BBSTATE=\"${data.state}\" AND BBCITY=\"${data.city}\"`
    }
    else if(reqblood=="APSTOCK"){
        sqlquerry=`SELECT B.BBNAME,BBADDRESS,BBPHONE,BBCITY,BBSTATE FROM BLOOD_INVENTORY I JOIN BLOODBANK B ON B.BBID=I.BBID WHERE I.APSTOCK>0 AND BBSTATE=\"${data.state}\" AND BBCITY=\"${data.city}\"`
    }
    else if(reqblood=="ANSTOCK"){
        sqlquerry=`SELECT B.BBNAME,BBADDRESS,BBPHONE,BBCITY,BBSTATE FROM BLOOD_INVENTORY I JOIN BLOODBANK B ON B.BBID=I.BBID WHERE I.ANSTOCK>0 AND BBSTATE=\"${data.state}\" AND BBCITY=\"${data.city}\"`
    }
    else if(reqblood=="ABPSTOCK"){
        sqlquerry=`SELECT B.BBNAME,BBADDRESS,BBPHONE,BBCITY,BBSTATE FROM BLOOD_INVENTORY I JOIN BLOODBANK B ON B.BBID=I.BBID WHERE I.ABPSTOCK>0 AND BBSTATE=\"${data.state}\" AND BBCITY=\"${data.city}\"`
    }
    else if(reqblood=="ABNSTOCK"){
        sqlquerry=`SELECT B.BBNAME,BBADDRESS,BBPHONE,BBCITY,BBSTATE FROM BLOOD_INVENTORY I JOIN BLOODBANK B ON B.BBID=I.BBID WHERE I.ABNSTOCK>0 AND BBSTATE=\"${data.state}\" AND BBCITY=\"${data.city}\"`
    }
    else if(reqblood=="OPSTOCK"){
        sqlquerry=`SELECT B.BBNAME,BBADDRESS,BBPHONE,BBCITY,BBSTATE FROM BLOOD_INVENTORY I JOIN BLOODBANK B ON B.BBID=I.BBID WHERE I.OPSTOCK>0 AND BBSTATE=\"${data.state}\" AND BBCITY=\"${data.city}\"`
    }
    else if(reqblood=="ONSTOCK"){
        sqlquerry=`SELECT B.BBNAME,BBADDRESS,BBPHONE,BBCITY,BBSTATE FROM BLOOD_INVENTORY I JOIN BLOODBANK B ON B.BBID=I.BBID WHERE I.ONSTOCK>0 AND BBSTATE=\"${data.state}\" AND BBCITY=\"${data.city}\"`
    }


    connection.query(sqlquerry,function (err, result) {
        if (err) throw err;
        console.log(result)
        res.send(result)
        // res.send("BloodBank Successfully Registered")
    });
})


if(process.env.DEVELOPMENT_MODE.trim()==="true"){
    //development
    console.log("You are in Developer Mode")
    port=5000
}
else{
    //production
    console.log("You are in Production Mode")
    port=80
    app.get('*', (req,res) =>{
        res.sendFile(path.join(__dirname+"/build/index.html"));
    });

}


app.listen(port,()=>{
    console.log("Server is Listening on port: "+ port)
})