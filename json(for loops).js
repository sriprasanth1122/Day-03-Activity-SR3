let n=[123,124,125,126,127,128];
let numberJSON = JSON.stringify(n);// array converts to JSON;
let obj=JSON.parse(numberJSON);//JSON converts to array;
for (let i=0; i <obj.length; i++) {
   console.log(n[i]);
   }
   console.log(" ");//just for splitting
   //for of loop
for (let i of n) {
   console.log(i);
}
console.log(" ");// just for splitting
let e;
   n.forEach((e,index) => {
       console.log(e)
    });
    console.log(" ")
    //for in loop
for (let b in n) {
   console.log(n[b]);
}
console.log(" ")
 //for in loop in object
    let resume = {  
       name : 'ranjith',
        dob:'23-06-1996',
        qualificaton : "Becholar of engineering (mechatronics)",
       gender: "Male",
        experience : "2 years",
        sslcmarks : '70%',
        diploma:'72%',
        };
        let ResumeJSON = JSON.stringify(resume);
        let resumeobj=JSON.parse(ResumeJSON)

        for (let r in resumeobj) {
           console.log(resumeobj[r]);
            }
        