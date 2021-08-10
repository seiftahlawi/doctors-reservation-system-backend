const MongoClient = require('mongodb').MongoClient;



exports.RetrevingAddPatientToDoctor=( Doctors,k)=>{
    var url = "mongodb://localhost:27017/DoctorsReservationSystem";
    MongoClient.connect(url,{useUnifiedTopology:true},function(err, data){
        if(err)throw err

    
    const pathent=Doctors.userId
 
    query={Email:pathent}

  
    var dbobject1=data.db('DoctorsReservationSystem')

    dbobject1.collection('Patients').findOne(query, (err,result)=>{
        
        if(result) {
           
            k(result);
        }
        if(err) throw err;
        data.close();
        
    })
    

})
}