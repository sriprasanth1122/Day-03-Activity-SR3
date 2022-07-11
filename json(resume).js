let resume= 

    {
        name:"Sri Prasanth R",
        EmailId: "sriprasanth1122@gmail.com",
        Mobile : 9842885185,
         educationalqualification:{
            Bachelorengineering :"Mechanical 84%",
            hsc: "56.16%",
            sslc:'83.42%',
         },
         techanicalskill:{

             SoftwarestoOperate :'AutoCAD,Basic knowledge in HTML,CSS,JavaScript',
            

         },
          AREASOFINTEREST:
                        { 
                          no1:'Software Learning',
                          no2:'Hydraulics and Pneumatic',
                          no3:'PLC and CNC Programming',
                          no4: 'Web Developing'

                                },
         PERSONALTRAITS : 
          {   
            a :'Self Motivated and Self Learner',
            b :'Effective Time Management and Punctual',
            c :'Flexible Person',
               },
         personalinfo:{
            personaladdress:{
                  doorn:'M162',
                     area:"Manickampalayam HU, Anna Nagar", 
                     city:'Erode' , 
                     district:'Erode',
                     Pincode :638011
                    },
                         Dob : "22/01/2001",
                 FathersName : 'Mr.Rajendran.S.S',
                      Gender : 'Male',
                 Nationality : 'Indian',
          LinguisticAbility :'Tamil  English',   
                     Hobbies : 'Playing cricket and Listening Music',

         }
         
        

         }

    
{
    let resumeJSON = JSON.stringify(resume);// object to JSON CONVERSION 
    console.log(resumeJSON);

//let resumeobj  =JSON.parse(resumeJSON);
//console.log(resumeobj);
 

}
