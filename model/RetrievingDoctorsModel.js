var MongoClient = require('mongodb').MongoClient;

exports.loginDoctor=()=>{
    var url = "mongodb://localhost:27017/DoctorsReservationSystem";
    MongoClient.connect(url,{useUnifiedTopology:true},function(err, data){
        if(err)throw err
        console.log('connected to db')
  
        var dbobject=data.db('DoctorsReservationSystem')



    dbobject.collection('Doctors').find({}).toArray(function(err, result) {
        if (err) throw err;
        
        
       

        db.close();
      });
    
       
    })
}
