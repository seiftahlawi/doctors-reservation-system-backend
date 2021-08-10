var MongoClient = require('mongodb').MongoClient;

exports.loginPatient=( Patient, myerr,k)=>{
    var url = "mongodb://localhost:27017/DoctorsReservationSystem";
    MongoClient.connect(url,{useUnifiedTopology:true},function(err, data){
        if(err)throw err
        console.log('connected to db')
        var dbobject=data.db('DoctorsReservationSystem')
query={
    Email:Patient.Email,
    Password:Patient.Password
}
if((query.Email!=='')&&(query.Password!=='')){

    dbobject.collection('Patients').findOne(query, (err,result)=>{
        if(!result) {
         console.log('logged in')
      
             myerr();
            
        } else {
          
            k();
        }

        if(err) throw err;
        data.close();
        
    })
    
}
       
    })
}
