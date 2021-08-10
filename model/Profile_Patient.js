var MongoClient = require('mongodb').MongoClient;

exports.ProfilePatient=( Patient,k)=>{
    var url = "mongodb://localhost:27017/DoctorsReservationSystem";
    MongoClient.connect(url,{useUnifiedTopology:true},function(err, data){
        if(err)throw err
        console.log('connected to db')
        var dbobject=data.db('DoctorsReservationSystem')
query={
    Email:Patient.Email,
}


    dbobject.collection('Patients').findOne(query, (err,result)=>{
        if(result) {
            k(result);
        }else{
            console.log('error')
        }

        if(err) throw err;
        data.close();
        
    })
    

       
    })
}
