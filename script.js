// // Exercise 1



// const arr = [1,2,2,3,4,4,5];


// // const y = new Set(arr);

// // console.log([...y]);




// // Exercise 2 


// const arr = ["apple", "banana", "apple", "apple", "banana", "orange"]


// const m = new Map();

// arr.forEach((item) => {
//     if (m.has(item)) {
//         const t = m.get(item);
//         console.log(t);
//         m.set(item, t + 1);
//     }
//     else{
//         m.set(item, 1)
//     }
//   });
  


  

// Exercise 3



// const arr = [1, 2, 3, 4];
// const square = new Map()

// arr.forEach((item) => {
//     square.set(item , item**2)
// })
// console.log(square);



// // Exercise 4

// const arr = [1, 2, 2, 3, 4, 4, 5];

// const newSet = new Set(arr);

// const t = Array(...newSet);
// console.log(t);




// Exercise 5


// const arr = [10, 12, 15, 20, 25, 22, 30];
// const newSet = new Set();
// const limit = 20;

// arr.forEach((a) => {
//     if (a > limit) {
//         newSet.add(a)
//     }
// })

// console.log(newSet);



// // Exercise 6


// const arr = [1, 2, 2, 3, 4, 4, 5];
// const m = new Map();

// arr.forEach((item) => {
//     if (m.has(item)) {
//         const t = m.get(item);
//         m.set(item, t + 1); 
//     } 
//     else {
//         m.set(item, 1); 
//     }
// });

// console.log(m);


// Exercise 7

// const arr = [1, 2, 2, 3, 4, 4, 5];

// const newSet = new Set(arr);

// const t = Array(...newSet);
// console.log(t);


// Exercise 8


// const keys = ['name', 'age', 'city'];
// const values = ['Thomas', '24', 'New York'];

// const sumArray = keys.map((key, index) => [key, values[index]]);

// const newMap = new Map(sumArray);
// console.log(newMap);




//                                                Card carusel


const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100; 
  carousel.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});
