var MongoClient = require('mongodb').MongoClient;

exports.UpdateDoctors=( Doctors,k)=>{
    var url = "mongodb://localhost:27017/DoctorsReservationSystem";
    MongoClient.connect(url,{useUnifiedTopology:true},function(err, data){
        if(err)throw err

    const query={Password:Doctors.oldPassword,Email:Doctors.oldEmail}
    var newvalues= { $set: {FirstName:Doctors.FirstName,LastName:Doctors.LastName,Email:Doctors.Email,Password:Doctors.Password,PhoneNumber:Doctors.PhoneNumber,specialty:Doctors.specialty,img:Doctors.img } };
    var dbobject=data.db('DoctorsReservationSystem')
    dbobject.collection('Doctors').updateOne(query,newvalues,(err,res)=>{

        if(err) throw err;
      
        data.close();
    })

})
}