var A = 10 + 5 * 2  

var B = (10 + 5) * 2 

var C = 20 / 2 + 3 * 4 - 5 

var D = 5 + 2 * (8 - 3) / 5 

var E = 30 % 4 + 6 * 2 

console.log("10 + 5 * 2 =", A, "//Applying DMAS rule (Multiply 5 with 2 first then add the answer with 10 final answer is 20)")

console.log("(10 + 5) * 2 =",B ,"//Applying BODMAS rule (Solve Bracket first then multiply the bracket answer with 2 Final Answer is 15 * 2 = 30)")

console.log("20 / 2 + 3 * 4 - 5 ",C,"// Applying DMAS rule (First of all we divide 20 with 2 then multiply 3 with 4 and then plus 10 with 12 and at the end subtract five from  22 the answer is 17)")

console.log("5 + 2 * (8 - 3) / 5 ",D,"//Applying BODMAS rule (First solve bracket: 8 - 3 = 5, then multiply 2 * 5 = 10, then divide 10 / 5 = 2, and finally add 5 + 2 = 7, final answer is 7)")

console.log("30 % 4 + 6 * 2",E,"//Applying operator precedence (First solve modulus: 30 % 4 = 2, and multiply: 6 * 2 = 12, then add both: 2 + 12 = 14, final answer is 14)")

