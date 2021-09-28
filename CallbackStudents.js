const students = [
    {name: "Jay", Subject: "maths"},
    {name: "Samita", Subject: "Science"}
]
function enrollStudent(student){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            students.push(student);
            console.log("Students has been enrolled")
            const error = false;
            if(!error){
            resolve();
        }else{
            reject();
        }
        },5000);
    })
}
function getStudent(){
    setTimeout(function(){
     let str = ""; 
     students.forEach(function(student){
       str += '<li> ${student.name}</li>'
     });
     document.getElementById('students').innerHTML = str;
     console.log("Students have been fetched");
    },1000);
}
let newStudent = {name: "Abhishek",Subject:"English"}
enrollStudent(newStudent).then(function(){
getStudent();
}).catch(function(){
    console.log("error occured")
});

//<h1>student</h1>
//<ul id="students"></ul>