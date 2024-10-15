/* O/P of the code.

1.
let sum = prompt(`What will be the result of 12 + 12?`);

if (String(sum == 24)) {
  alert(`Hurray 🔥 You are right!`);
} else {
  alert(`Sorry you are wrong!`);
} 
O/P: depend on your input.

2.  
if we change sum == 24 to sum === 24 in the code snipped above will the output change?

    // o/p will be change becoz prompt always returns String & we are comparing strictly Here.

3.
What will be the output if we replace == with ||?

    // || (OR) always search for truthy value so it will return true statement: `Hurray 🔥 You are right!`

4.
What will be the output if we replace == with &&?

    // && (AND) always search for falsy value so it will return false statement, but there is no falsy value here: o/p => `Hurray 🔥 You are right!`

5.
What will be the output if we change the sum == 24 to String(sum == 24) like given? Explain why?

    // O/P: `Hurray 🔥 You are right!` becoz prompt return String & if(String("str1" == 23)): implicit conversion and finaly if("string") then alert, it alert always true.

6.
What will be the output of the code given below.

let sum = prompt(`What will be the result of 12 + 12?`);
if (String(sum != 24)) {
    alert(`Hurray 🔥 You are right!`);
  } else {
    alert(`Sorry you are wrong!`);
  } 

//   O/P: `Hurray 🔥 You are right!` becoz prompt return String & if(String("str1" == 23)): implicit conversion

//Q. In which of the following case implicit type conversion will take place and why? Write output each code snippet.
7.
21 + prompt('Enter a number'); // let's prompt 2

 O/P: "212"

8.
prompt('Enter first number') +
  prompt('Enter second number'); // let's first no. = 21, second no. = 3

  O/P: "213"

9.
function sum(a, b) {
    return a + b;
  }
  '21' + sum(21, 10); // O/P: "2131"
  

10.
function sum(a, b) {
    return a + b;
  }
  alert('Hello') + sum(10, 10); // O/P: NaN, becoz number + string => NaN


11. 
undefined + 21; O/P: NaN

12.
44 && 'Hello' && 'Arya' + 'Stark' || 100;

    // O/P: And search for falsy So it return last truthy value, || search for truthy and it returns  first truthy and last falsy value.
*/
13.
alert( null || 2 || undefined );

    // O/P: || search for truthy and it returns  first truthy and last falsy value So 2.

