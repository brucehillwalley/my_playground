//? The purpose of this coding challenge is to capitalize the first letter of each word in the given long text.

let text = `There are many variations of passages of Lorem Ipsum available, 
but the majority have suffered alteration in some form, by injected humour, 
or randomised words which don't look even slightly believable. If you are going 
to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing 
hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat 
predefined chunks as necessary, making this the first true generator on the Internet. It uses 
a dictionary of over 200 Latin words, combined with a handful of model sentence structures, 
to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
free from repetition, injected humour, or non-characteristic words etc.`;

let expectedText = `There Are Many Variations Of Passages Of Lorem Ipsum Available, But The
Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words which
Don't Look Even Slightly Believable. If You Are Going To Use a Passage Of Lorem Ipsum, You 
Need To Be Sure There Isn't Anything Embarrassing Hidden In The Middle Of Text. All The Lorem 
Ipsum Generators On The Internet Tend To Repeat Predefined Chunks As Necessary, Making This The
First True Generator On The Internet. It Uses A Dictionary Of Over 200 Latin Words, Combined With
A Handful Of Model Sentence Structures, To Generate Lorem Ipsum Which Looks Reasonable. 
The Generated Lorem Ipsum Is Therefore Always Free From Repetition, Injected Humour, Or non-characteristic Words Etc.`;

let words = text.split(" ");

// console.log(words);

//* map ile çözüm

console.log(
  words
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
);

console.log("**************************************************************");

//* Klasik for döngüsü ile

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
// }

// console.log(words.join(" ") == expectedText);
// //expected de ilk harfi büyük olmayan var false geliyor

console.log("**************************************************************");

//* Function ile

// function title(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] = array[i][0].toUpperCase() + array[i].slice(1).toLowerCase();
//     }
//     return array
// }

// console.log(title(words).join(" "))

//*map+ reduce

console.log(
  words
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .reduce((acc, word) => acc + " " + word)
);
console.log("XX**************************************************************");

//? Burada ["of", "as", "in", "are", "the", "is", "or"] bunları hariç tutmak istiyorsak

const newSentence = text
  .split(" ")
  .map((word) =>
    ["of", "as", "in", "are", "the", "is", "or"].includes(word.toLowerCase())
      ? word.toLowerCase()
      : word.charAt(0).toUpperCase() + word.slice(1)
  )
  .join(" ");
console.log(newSentence);

console.log("**************************************************************");

//? You have an array of objects representing books, and each object has properties like
//?"title," "author," and "rating." Your task is to create a JavaScript function that
//? filters the books based on a specific rating threshold and then transforms the filtered
//? books into a new array containing only the "title" and "author" properties of the selected books.

const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", rating: 4.2 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", rating: 4.6 },
  { title: "1984", author: "George Orwell", rating: 4.0 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: 4.7 },
  { title: "Pride and Prejudice", author: "Jane Austen", rating: 4.5 },
];
const minRating = 4.5;
//Expected Output
[
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
];

function selectBook(arr) {
  return arr.filter(
    (bookObj) => bookObj.rating >= minRating && delete bookObj.rating
  );
}

// console.log(selectBook(books));
//? burada rating e göre filtreledik truelar için short circuit ile rating i sildik

//? For döngüsü ile :

// let result = [];

// for (let i = 0; i < books.length; i++) {
//     if (books[i].rating >= minRating) {
//         delete books[i].rating;
//         result.push(books[i]);
//     }
// }

// console.log(result)

//? function ile :

const goodRate = function (kitaplar) {
  let result = [];

  for (let i = 0; i < kitaplar.length; i++) {
    if (kitaplar[i].rating >= minRating) {
      delete kitaplar[i].rating;
      result.push(kitaplar[i]);
    }
  }
  return result;
};

console.log(goodRate(books));

const team = {
  name: "ibrahim",
  yası: 36,
  getName: function () {
    return "hello";
  },
  greetings() {
    return "sss";
  },
};

console.log(team.hasOwnProperty("yası"));
console.log(Object.keys(team));
console.log(Object.getOwnPropertyNames(team));
console.log(Object.getOwnPropertyNames(team));
console.log(team.greetings());

const emptyObj = new Object();

let arr = [1, 2, 4];
console.log(arr);
console.log(typeof arr);

let arr2 = arr; //? referansları kopyalar ikisi değişir.
console.log(arr);

//? deep copy aşağıda
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));

let [a, b, c, d] = arr;
console.log(d);

//? rest geri kalan
const arrs = [1, 2, 3, 4, 5];
const [k, l, ...geri] = arrs;

console.log(k); // 1
console.log(l); // 2
console.log(geri); // [3, 4, 5]

//?14.soru

function firstletter(text) {
  let splittedText = text.split(" ");
  let result = [];
  splittedText.forEach((element) => {
    result.push(element[0]);
  });
  return result.join("");
}

const name = "John Ronald Reuel Tolkien";
console.log(firstletter(name));

console.log(arr.map((element) => element ** 2));

//? 16.soru
const dizim = [1, 2, 3, 4, 5];
const sumOfEvenNumbers = dizim.reduce((total, num) => {
  if (num % 2 === 0) {
    return total + num;
  }
  return total;
}, 0);

console.log(sumOfEvenNumbers); // 6
//?Yukarıdaki örnekte, arr dizisindeki her bir elemanı kontrol ederek çift sayıları toplamak için 
//?reduce yöntemini kullandık. Başlangıç değeri olarak 0 verdik ve her bir elemanı kontrol ederek
//? çift sayıları topladık. Sonuç olarak, dizideki çift sayıların toplamı olan 6'yı elde ettik.

console.log("***************************");

// 1. High Priced Product Categories
// You are given an array of objects representing a collection of products, each with a name, price, and
// category. Your task is to use map, filter, and reduce to calculate the average price of products in each
// category, and then return an array of objects containing only the categories that have an average price
// above 50.
// Sample input :

const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
 ];

//  Expected outcome :
[ 
 { category: 'Clothes', average: 55 },
 { category: 'Electronics', average: 55 }
]


let unique =[]

products.forEach((item)=> unique.includes(item.category) ? null: unique.push(item.category))

console.log(unique);

let result=[]
for(let item of unique){
result.push({
  category:item,
  average:products.filter((e)=> e.category==item).reduce((sum,int)=>sum+int.price,0)/products.filter((e)=>e.category==item).length

})
}

console.log(result);
console.log(result.filter((e)=> e.average>50))

console.log("**************************");


// 2. HR VS IT Department
// Task : You are given an array of objects representing a collection of employees, each with a name, salary,
// and department. Your task is to use map, filter, and reduce to calculate the average salary for each
// department and then return an array of objects containing only the departments that have an average
// salary above 65000.
// Sample input :
const employees = [
 { name: "John", salary: 50000, department: "IT" },
 { name: "Jane", salary: 60000, department: "HR" },
 { name: "Bob", salary: 55000, department: "IT" },
 { name: "Sophie", salary: 75000, department: "HR" },
 { name: "Mike", salary: 65000, department: "IT" },
 { name: "Emily", salary: 80000, department: "HR" },
 { name: "David", salary: 70000, department: "IT" },
];

// Expected outcome :

[
 { department: 'HR', average: 71666 }
]

let baslik =[]

employees.forEach((item)=> baslik.includes(item.department) ? null: baslik.push(item.department))

console.log(baslik);

let sonuc=[]

for(eleman of baslik){

  sonuc.push({
    department:eleman,
    average:employees.filter((item)=>item.department==eleman).reduce((acc,int)=>acc+int.salary,0)/(employees.filter((item)=>item.department==eleman)).length
  })
}

console.log(sonuc);
console.log(sonuc.filter((e)=>e.average>65000));