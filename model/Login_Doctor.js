const MongoClient = require('mongodb').MongoClient;

exports.loginDoctor=( Doctors, myerr,k)=>{
    const url = "mongodb://localhost:27017/DoctorsReservationSystem";
    MongoClient.connect(url,{useUnifiedTopology:true},function(err, data){
        if(err)throw err
        console.log('connected to db')
  
        const dbobject=data.db('DoctorsReservationSystem')

query= {JobNumber:Doctors.JopNumber, Password:Doctors.password}

if((query.JobNumber!=='')&&(query.Password!=='')){

    dbobject.collection('Doctors').findOne(query, (err,res)=>{
        if(!res) {
                console.log(query.JobNumber+'err')
              console.log(query.Password+'err')     
              myerr();  
           
                        
        } else {
    console.log(query.JobNumber+'don')
console.log(query.Password+'don')
            k(res); 
            
          
        }

        if(err) throw err;
        
        data.close();
        
    })
    
}
       
    })
}
