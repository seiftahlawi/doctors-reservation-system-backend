var addPatients=require('../model/add_patient')
var addDoctors=require('../model/add_Doctors')
var Login=require('../model/Login_Patient')
var LoginDoctor=require('../model/Login_Doctor')
var GetProfilePatient=require('../model/Profile_Patient')
var HomePageDoctorInfo=require('../model/Profile_Doctors_HomePage')
var HomePagePatientInfo=require('../model/Profile_Patients_HomePage')
var MainPageDoctor=require('../model/DoctorMainPage')
var UpdateDoctors=require('../model/update_doctor')
var UpdatePatients=require('../model/updatepatient')
var AddPatientToDoctor=require('../model/add_Patient_to_Doctor')

var RetrevingAddPatientToDoctor=require('../model/Retreving_AddedPatient')

/* Add Patient   */
exports.addPatient = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  
  const FirstName=req.body.FirstName
  const LastName=req.body.LastName
  const Email=req.body.Email
  const Password=req.body.Password
const PhoneNumber=req.body.PhoneNumber
const Address=req.body.Address
const chronicDiseases=req.body.chronicDiseases
const diseasesValue=req.body.diseasesValue
const healthInsurance=req.body.healthInsurance
const day=req.body.day
const month=req.body.month
const Year=req.body.Year

const DOB=day+'/'+month+'/'+Year
const healthInsuranceImg=req.body.fileToUpload
const ProfileChange=req.body.ProfileChange
const Patient={FirstName:FirstName,LastName:LastName,Email:Email,Password:Password,Address:Address,chronicDiseases:chronicDiseases,diseasesValue:diseasesValue,healthInsurance:healthInsurance,DOB:DOB,healthInsuranceImg:healthInsuranceImg,ProfileChange:ProfileChange,PhoneNumber:PhoneNumber,feedback:[]}
const k=()=>{
  return res.json({
     rd:true
   })
 }
addPatients.addPatient(Patient,k);


};

/* Patient  Login  */
exports.LogPatient = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  
  const Email=req.body.Email
  const Password=req.body.Password


const Patient={Email:Email,Password:Password}

const c=()=>{
 return res.json({
    msg: 'Email/Password is invalid' ,
    rd:false
  })
}

const k=()=>{
  

  return res.json({
     msg:'',
     rd:true,

     
   })
 }
Login.loginPatient(Patient,c,k);



};


/* Patient  Profile  */
exports.ProfilePatient = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  
  const Email=req.body.Email
  

const Patient={Email:Email}



const k=(result)=>{
  
  return res.send(result)
 }

 GetProfilePatient.ProfilePatient(Patient,k);




};

/* Doctors  Profile HomePage */

exports.ProfileDoctorsHomePage = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  
  const Email= req.body.Email
  /**Id */

const Doctor={Email:Email}



const k=(result)=>{
  
  return res.send(result)
 }
 HomePageDoctorInfo.ProfileDoctorsHomePage(Doctor,k)





};
/* Patients  Profile HomePage */

exports.ProfilePatientsHomePage = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  
  const Email= req.body.Email
  /**Id */

const Doctor={Email:Email}



const k=(result)=>{
  
  return res.send(result)
 }
 HomePagePatientInfo.ProfilePatientsHomePage(Doctor,k)





};
/* Doctors  Main Page */

exports.DoctorsMainPage = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  
  const JobNumber= req.body.JobNumber

  /**Id */

const Doctor={JobNumber:JobNumber}



const k=(result)=>{
  
  return res.send(result)
 }
 MainPageDoctor.MainPageDoctor(Doctor,k)





};



/* Update Patient profile */
exports.LogPatient = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  
  const Email=req.body.Email
  const Password=req.body.Password


const Patient={Email:Email,Password:Password}

const c=()=>{
 return res.json({
    msg: 'Email/Password is invalid' ,
    rd:false
  })
}

const k=(result)=>{
  

  return res.json({
     msg:'',
     rd:true,
dt:result
     
   })
 }
Login.loginPatient(Patient,c,k);



};





/* Add  Doctor  */

exports.addDoctors =(req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');

  //const picture = req.body.fileToUpload

 // picture.mv("./uploads/" + picture.name)
  
  const FirstName='Dr. '+ req.body.FirstName.charAt(0).toUpperCase()+ req.body.FirstName.slice(1) 

  const LastName=req.body.LastName.charAt(0).toUpperCase()+ req.body.LastName.slice(1) 

  const Email=req.body.Email
  const Password=req.body.Password
const JobNumber=req.body.JobNumber
const YourAddress=req.body.YourAddress
const location=req.body.location
const Experience=req.body.Experience
const university=req.body.university
const day=req.body.day
const month=req.body.month
const Year=req.body.Year
const PhoneNumber=req.body.PhoneNumber
const DOB=day+'/'+month+'/'+Year
const specialty=req.body.specialty
const img=req.body.fileToUpload
const Doctor={FirstName:FirstName,LastName:LastName,Email:Email,PhoneNumber:PhoneNumber,JobNumber:JobNumber,Password:Password,YourAddress:YourAddress,location:location,Experience:Experience,university:university,DOB:DOB,specialty:specialty,img:img,Patients:[]}

const k=()=>{
  return res.json({
     rd:true
   })
 }
 addDoctors.addDoctors(Doctor,k);


};



/* update  Doctor  */

exports.UpdateDoctors =(req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const FirstName= req.body.FirstName.charAt(0).toUpperCase()+ req.body.FirstName.slice(1) 

  const LastName=req.body.LastName.charAt(0).toUpperCase()+ req.body.LastName.slice(1) 

  const Email=req.body.Email
  const oldEmail=req.body.oldEmail
  const Password=req.body.Password
  const oldPassword=req.body.oldPassword
const PhoneNumber=req.body.PhoneNumber

const specialty=req.body.specialty
const img=req.body.img
const Doctor={FirstName:FirstName,LastName:LastName,Email:Email,oldEmail:oldEmail,PhoneNumber:PhoneNumber,Password:Password,oldPassword:oldPassword,specialty:specialty,img:img}


const k=()=>{
  return res.json({
     rd:true
   })
 }
 UpdateDoctors.UpdateDoctors(Doctor,k);


};





/* update  patient  */

exports.UpdatePatients =(req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const FirstName= req.body.FirstName.charAt(0).toUpperCase()+ req.body.FirstName.slice(1) 

  const LastName=req.body.LastName.charAt(0).toUpperCase()+ req.body.LastName.slice(1) 

  const Email=req.body.Email
  const oldEmail=req.body.oldEmail
  const Password=req.body.Password
  const oldPassword=req.body.oldPassword
const PhoneNumber=req.body.PhoneNumber


const img=req.body.img
console.log(req.body.img)

const Patient={FirstName:FirstName,LastName:LastName,Email:Email,oldEmail:oldEmail,PhoneNumber:PhoneNumber,Password:Password,oldPassword:oldPassword,img:img}


const k=()=>{
  return res.json({
     rd:true
   })
 }
 UpdatePatients.UpdatePatients(Patient,k);


};



/*Doctor Retriveing */


exports.DoctorRetriveing = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');



 /*res.json({
    
   data:LoginDoctor.loginDoctor()
   })*/
 

   LoginDoctor.loginDoctor()


};




/*Doctor Log in */

exports.LogDoctor = (req, res) => {
  
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');

  
  const password=req.body.password
  const JopNumber=req.body.JopNumber



const DoctorData={password:password,JopNumber:JopNumber}

const myerr=()=>{
 return res.json({
    msg:'JobNumber/Password is invalid',
    rd:false
  })
}
const k=(data)=>{
  return res.json({
    msg:'',
    data:data,
     rd:true
   })
 }

 LoginDoctor.loginDoctor(DoctorData,myerr,k);



};









/* add  patient to doctor  */

exports.AddPatientToDoctor =(req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const DrJopNumber=req.body.DrJopNumber
  const Drpassword=req.body.Drpassword
  const userId=req.body.userId



const Doctors={DrJopNumber:DrJopNumber,Drpassword:Drpassword,userId:userId}
console.log(Doctors)


 AddPatientToDoctor.AddPatientToDoctor(Doctors);


};

/* retreving  patient to doctor  */

exports.RetrevingPatientToDoctor =(req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');


  const userId=req.body.patient



const Doctors={userId:userId}

  

  const k=(result)=>{
  
    return res.send(result)
   }
console.log(Doctors)


RetrevingAddPatientToDoctor.RetrevingAddPatientToDoctor(Doctors,k);


};