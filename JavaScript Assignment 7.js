// Q1 Find the number of digits. Take a number from the user and print the count of digits in that number.
// Note: You have to complete Find_Digits. No need to take any input.
// Input Format The input contains a single number N.
// Output Format Return the count of digits in the given number.
// Constraints 1≤N≤10000
// Example
// Sample Input 1234
// Sample Output 4
function Find_Digits(N) {
  return N.toString().length;
}
// Example
console.log(Find_Digits(1234)); // Output: 4

// Q2 Find the Fives. Among all the digits from 0−9, PrepBuddy likes number 5. 
// He has a number and wants you to find out the number of times 5 occurred in the given number.
// Note: You have to complete Find_Five. No need to take any input.
// Input Format The input contains a single number N.
// Output Format Return the number of fives as the desired output.
// Constraints 1≤N≤10000000
// Example
// Sample Input 345654
// Sample Output 2
function Find_Five(N) {
  return N.toString().split('').filter(ch => ch === '5').length;
}
// Example
console.log(Find_Five(345654)); // Output: 2

// Q3 Find Sum You are given an integer N, and your task is to find the sum of all the even integers starting from 11 upto N (N inclusive).
// Note: You have to complete findSum function. No need to take any input.
// Input Format The first and the only line of the input contains an integer N.
// Output Format Return the sum of all even integers from 11 upto N(N inclusive).
// Constraints 1≤N≤500
// Example
// Sample Input 6
// Sample Output 12
function findSum(N) {
  let sum = 0;
  for (let i = 2; i <= N; i += 2) {
    sum += i;
  }
  return sum;
}
// Example
console.log(findSum(6)); // Output: 12

// Q4 Find the sum of the digits of a given number. 
// Write a program that takes a number from the user and get the sum of the digits present in the number.
// Note: You have to complete Number_Sum. No need to take any input.
// Input Format The input contains a single number N.
// Output Format Return the sum of the digits of the number.
// Constraints 1≤N≤10000
// Example
// Sample Input 1234
// Sample Output 10
function Number_Sum(N) {
  return N.toString().split('').reduce((acc, val) => acc + parseInt(val), 0);
}
// Example
console.log(Number_Sum(1234)); // Output: 10

// Q5 Print the Odds. Write a program which takes a number from user and print all odd numbers in between 2 and N, but print 2 first.
// Note: You have to complete Print_Odd. No need to take any input.
// Input Format The input contains a single number N.
// Output Format Print the desired output.
// Constraints 2≤N≤100
// Example
// Sample Input 10
// Sample Output2 3 5 7 9
function Print_Odd(N) {
  let result = "2 ";
  for (let i = 3; i <= N; i++) {
    if (i % 2 !== 0) result += i + " ";
  }
  console.log(result.trim());
}
// Example
Print_Odd(10); // Output: 2 3 5 7 9

// Q6 Print the Pattern.
// Write a program which ask user for no of lines and print a pattern using an asterik .
// Note: You have to complete Print_pattern. No need to take any input.
// Input Format The input contains a single number N.
// Output Format Print the required pattern.
// Constraints 1≤N≤100
// Example
// Sample Input 5
// Sample Output
// *
// **
// ***
// ****
// *****
function Print_pattern(N) {
  let pattern = "";
  for (let i = 1; i <= N; i++) {
    pattern += "*".repeat(i) + "\n";
  }
  console.log(pattern);
}
// Example
Print_pattern(5);
/*
*
**
***
****
*****
*/

// Q7 Check whether a Number is a prime or not.
// Write a program which takes a number from user and check whether number is prime number or not a prime number.
// Note: You have to complete Prime_Check. No need to take any input.
// Input Format The input contains a single number N.
// Output Format Return "YES" if the given number is Prime, else print "NO"(without quotes).
// Constraints 1≤N≤10000
// Example
// Sample Input 1 7
// Sample Output 1 YES
// Sample Input 2 4
// Sample Output 2 NO
function Prime_Check(N) {
  if (N < 2) return "NO";
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) return "NO";
  }
  return "YES";
}
// Example
console.log(Prime_Check(7)); // Output: YES
console.log(Prime_Check(4)); // Output: NO

// Q8 Print Numbers
// You are given an integer N, and your task is to print all the integers starting from 11 till N (N inclusive).
// Note: You have to complete printNumbers function. No need to take any input.
// Input Format The first and the only line of the input contains an integer N.
// Output Format Print all the numbers starting from 11 till N (including N).
// Constraints 1≤N≤500
// Example
// Sample Input 4
// Sample Output 1 2 3 4
function printNumbers(N) {
  let result = "";
  for (let i = 1; i <= N; i++) {
    result += i + " ";
  }
  console.log(result.trim());
}
// Example
printNumbers(4); // Output: 1 2 3 4

// Q9 Print the Table
// Write a program which takes a number from user and print the table.
// Note: You have to complete Print_Table. No need to take any input.
// Input Format The input contains a single number N.
// Output Format Print the table of the given number.
// Constraints 1≤N≤100
// Example
// Sample Input 3
// Sample Output
// 3*1=3
// 3*2=6
// 3*3=9
// 3*4=12
// 3*5=15
// 3*6=18
// 3*7=21
// 3*8=24
// 3*9=27
// 3*10=30
function Print_Table(N) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${N}*${i}=${N * i}`);
  }
}
// Example
Print_Table(3);
/*
3*1=3
3*2=6
...
3*10=30
*/