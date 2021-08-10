var MongoClient = require('mongodb').MongoClient;

exports.addDoctors=( Doctors,k)=>{
    var url = "mongodb://localhost:27017/DoctorsReservationSystem";
    MongoClient.connect(url,{useUnifiedTopology:true},function(err, data){
        if(err)throw err
        var dbobject=data.db('DoctorsReservationSystem')
        dbobject.collection('Doctors').insertOne(Doctors,(err,res)=>{
            if(err) throw err;
            if(res) {
                   k();
               }
            data.close();
            console.log(' Doctor inserted')
        })
    })
}
