var basicSalary = +prompt("Enter your Basic Salary")
var houseAllowance = basicSalary * 0.20
var medicalAllowance = basicSalary * 0.10
var taxDeduction = basicSalary * 0.05
var grossSalary = basicSalary + houseAllowance + medicalAllowance  
var netSalary = grossSalary - taxDeduction

console.log("Basic Salary : " + basicSalary)
console.log("House Allowance (20%): " + houseAllowance)
console.log("Medical Allowance (10%): " + medicalAllowance)
console.log("Gross Salary : " +  grossSalary)
console.log("Tax Deduction (5%): " + taxDeduction)
console.log("Net Salary : " + netSalary) ``