var englishNumber = Number(prompt("Enter your English marks out of 100"));
var mathsNumber = Number(prompt("Enter your Math marks out of 100"));
var scienceNumber = Number(prompt("Enter your Science marks out of 100"));
var computerNumber = Number(prompt("Enter your Computer marks out of 100"));
var urduNumber = Number(prompt("Enter your Urdu marks out of 100"));

if (englishNumber > 100 || mathsNumber > 100 || scienceNumber > 100 || computerNumber > 100 || urduNumber > 100) {
    alert("Please enter marks under 100 for all subjects.");
} else {
    var obtainedMarks = englishNumber + mathsNumber + scienceNumber + computerNumber + urduNumber;
    var totalMarks = 500;
    var percentage = (obtainedMarks / totalMarks) * 100;
    console.log("English : " + englishNumber)
    console.log("Maths : " + mathsNumber)
    console.log("Science : " + scienceNumber)
    console.log("Computer : " + computerNumber)
    console.log("Urdu : " + urduNumber)
    console.log("Total Marks: " + totalMarks);
    console.log("Obtained Marks: " + obtainedMarks);
    console.log("Percentage: " + percentage + "%");
}