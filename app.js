const express = require('express')
var request = require('request')
const app = express()
const port = 5000
const userRouter = require('./routes/userRoutes');
var bodyParsar=require('body-parser')

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/DoctorsReservationSystem";
const fetch=require("node-fetch")
const fileUpload = require('express-fileupload');

urlpars=bodyParsar.urlencoded({extended:false})

app.use('/',urlpars,userRouter)

app.get('/DoctorRetriveing',urlpars,(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');


  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("DoctorsReservationSystem");
    var mysort = { "_id":-1 };
    dbo.collection("Doctors").find({}).sort(mysort).toArray(function(err, result) {
      if (err) throw err;
     res.send(result);
      db.close();
    });
  });



})
app.get('/PatientRetriveing',urlpars,(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');


  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("DoctorsReservationSystem");
    var mysort = { "_id":-1 };
    dbo.collection("Patients").find({}).sort(mysort).toArray(function(err, result) {
      if (err) throw err;
     res.send(result);
      db.close();
    });
  });



})

/*upload file */
const cors = require('cors')
// middle ware
app.use(express.static('public')); //to access the files in public folder
app.use(cors()); // it enables all cors requests
app.use(fileUpload());
// file upload api
app.post('/upload', (req, res) => {
    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
        // accessing the file
    const myFile = req.files.file;
    //  mv() method places the file inside public directory
    myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });
})


/*feade back 
app.get('/Addfeadeback',function(req,res) {

 var todo = {
  DoctorEmail:'faheem_faraj@yahoo.com',
  PatientEmail:'safetahlawi@yahoo.com',
  comment: 'amman'
}
  console.log(todo)
  
   res.send( todo)
})
*/
/* Get feade back */


app.get('/Getfeadeback',function(req,res) {

  fetch('http://localhost/DoctorsReservationSystemPHPserver/Getfeadeback.php')
  .then(res => res.json())
  .then(json => {
     
      res.send(json)

})

   
   
 })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



