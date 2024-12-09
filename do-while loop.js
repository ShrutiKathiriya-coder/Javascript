// Do while loop


// 1) Print out 10 to 1

// let i = 10;
// do {
//     console.log(i);
//     i--;
// } while (i > 0);



// 2) Print out 51 to 79

// let j = 51;
// do {
//     console.log(j);
//     j++;
// } while (j <= 79);




// 3) Enter n and print out 1 to n

// let n = Number(prompt("Enter the value of n"));
// let k = 1;
// do {
//     console.log(k);
//     k++;
// } while (k <= n);




// 4) Enter n and print out -n to 1

// let n = Number(prompt("Enter The Number of n"));
// let i = -n;
// do {
//     console.log(i);
//     i++;
// } while (i <= 1);




// 5) Enter n and print out -n to n

// let n = Number(prompt("Enter The Number of n"));
// let i = -n;
// do {
//     console.log(i);
//     i++;
// } while (i <= n);




// 6) Enter n and print out odd numbers up to n

// let n = Number(prompt("Enter The Number of n"));
// let i = 1;
// do {
//     console.log(i);
//     i += 2;
// } while (i <= n);




// 7) Enter n and print out even numbers up to n

// let n = Number(prompt("Enter The Number of n"));
// let i = 0;
// do {
//     console.log(i);
//     i += 2;
// } while (i <= n);



// 8) Series print out 1, 4, 3, 16, 5, 36.......

// let i = 1;
// do {
//     console.log(i % 2 === 0 ? i * i : i);
//     i++;
// } while (i <= 10);


// ---

// 9) Series print out 1, 1, 2, 3, 5, 8 .....

// Method 1:

// let a = +prompt("Enter a Number:");
// let x = 0, y = 1, z;
// let i = 0;
// do {
//     console.log(x);
//     z = x + y;
//     x = y;
//     y = z;
//     i++;
// } while (i <= a);



// 10) Series print out 1, 4, 12, 32, 80, 192, 448 .......

let n = 10;
let first = 1, second = 4;
let r = 3;

console.log(first);
console.log(second);

do {
    let next = (second - first) * 4;
    console.log(next);
    first = second;
    second = next;
    i++;
} while (r <= n);
