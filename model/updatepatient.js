var MongoClient = require('mongodb').MongoClient;

exports.UpdatePatients=( Patient,k)=>{
    var url = "mongodb://localhost:27017/DoctorsReservationSystem";
    MongoClient.connect(url,{useUnifiedTopology:true},function(err, data){
        if(err)throw err

    const query={Password:Patient.oldPassword,Email:Patient.oldEmail}
    var newvalues= { $set: {FirstName:Patient.FirstName,LastName:Patient.LastName,Email:Patient.Email,Password:Patient.Password,PhoneNumber:Patient.PhoneNumber,ProfileChange:Patient.img } };
    var dbobject=data.db('DoctorsReservationSystem')
    dbobject.collection('Patients').updateOne(query,newvalues,(err,res)=>{

        if(err) throw err;
      
        data.close();
    })

})
}