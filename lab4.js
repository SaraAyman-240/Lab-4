
let name = "soha";
let gpa = 2.8;

function yourResult(studentName) {
  console.log(`Hello ${studentName}, your GPA is ${gpa}.`);

  if (gpa < 3) {
    console.log("You're failed in exam.");
  } else {
    console.log("You've passed.");
  }
}

yourResult(name);
