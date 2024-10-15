// O/P of the code.
// 1.
let sum = prompt(`What will be the result of 12 + 12?`);

if (String(sum == 24)) {
  alert(`Hurray 🔥 You are right!`);
} else {
  alert(`Sorry you are wrong!`);
} 
// O/P: depend on your input.

// 2.  if we change sum == 24 to sum === 24 in the code snipped above will the output change?

    // o/p will be change becoz prompt always returns String & we are comparing strictly Here.

// 3.What will be the output if we replace == with ||?

    // || (OR) always search for truthy value so it will return true statement: `Hurray 🔥 You are right!`

// 4.What will be the output if we replace == with &&?

    // && (AND) always search for falsy value so it will return false statement, but there is no falsy value here: o/p => `Hurray 🔥 You are right!`

// 5.What will be the output if we change the sum == 24 to String(sum == 24) like given? Explain why?

    // O/P: `Hurray 🔥 You are right!` becoz prompt return String & if(String("str1" == 23)): implicit conversion and finaly if("string") then alert, it alert always true.

