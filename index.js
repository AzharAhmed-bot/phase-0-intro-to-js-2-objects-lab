const employee ={
    streetAdress : "Riverside",
    name : "John"
}
console.log(employee);
function  updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee={...employee};
    newEmployee[key]=value;
    return newEmployee;
}
next=updateEmployeeWithKeyAndValue(employee,"name","Aaaron")
console.log(next.name);

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;
    return employee;
}
next=destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","Steve")

function deleteFromEmployeeByKey(employee,key){
     const newEmployee=Object.assign({}, employee);
     delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
     delete employee[key];
     return employee;
}

