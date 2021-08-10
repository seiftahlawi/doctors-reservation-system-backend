
const MongoClient = require('mongodb').MongoClient;



exports.AddPatientToDoctor=( Doctors)=>{

    var url = "mongodb://localhost:27017/DoctorsReservationSystem";
    MongoClient.connect(url,{useUnifiedTopology:true},function(err, data){
        if(err)throw err

    const query={JobNumber:Doctors.DrJopNumber,Password:Doctors.Drpassword}
    
 



    var newvalues= { $push:{Patients:Doctors.userId} };
    var dbobject=data.db('DoctorsReservationSystem')
    dbobject.collection('Doctors').updateOne(query,newvalues,(err,res)=>{

        if(err) throw err;
      
        data.close();
    })

})
    

}
