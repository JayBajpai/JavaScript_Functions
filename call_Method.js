//call method is used for function borrowing
let name = {
firstName: "Jay",
lastName: "Bajpai"
}
let printFullName = function (city, state) {
console.log(this.firstName + " " +this.lastName + " " + city + " , " + state);
}
printFullName.call(name, "Lucknow","Uttar Pradesh");

let name2 = {
firstName: "Samita",
lastName: "Bajpai",
}
printFullName.call(name2,"Pune","Maharashtra");
//apply method 
printFullName.apply(name2,["Pune","Maharashtra"]);
//bind method(it is used to bind a copy of method that can be used later)
let printMyName = printFullName.bind(name2,"Pune","Maharashtra");
console.log(printMyName);
printMyName();