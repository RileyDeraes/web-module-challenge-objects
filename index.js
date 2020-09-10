///////////////Menu Items (MVP)///////////////////

const latte = {name: "Cafe Latte", price: 4, category: "Drinks"};
const burger = {name: "Burger", price: 18, category: "Lunch"};
const breakfastBurrito = {name: "Breakfast Burrito", price: 16, category:"Breakfast"};

/* Task 1a: write a function to return more menu items with the same format as the items above. */

function createMenuItem(name, cost, category) {
  
  var obj = {
    name: name, 
    price: cost, 
    category: category, }
    return obj; }

var coffee = createMenuItem("Coffee", 1, "Drink");
var pizzaSlice = createMenuItem("Pizza by the slice", 1, "Food");
var pizzaWhole = createMenuItem("A whole pizza", 15, "Food");
var soda = createMenuItem("Soda", 1, "Drink");
var beans = createMenuItem("Beans", 990, "Food");


console.log(beans.name + " costs $" + beans.price + " and is " + beans.category); //Change "beans" with any other var.
console.log(`${beans.name} costs $${beans.price} and is ${beans.category}`); //Fancier log but the same thing.

/* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter. */

function createMenuItem(name, cost, category) {
  var obj = {
    name: name, 
    price: cost, 
    category: category,
    discount(status){
      if (status == "teacher" || status == "student") {
        var discounted = .75;
      } else {
        var discounted = .9; }
      return this.price * discounted; }
            }
    return obj;                               }

var coffee = createMenuItem("Coffee", 1, "Drink");
var pizzaSlice = createMenuItem("Pizza by the slice", 1, "Food");
var pizzaWhole = createMenuItem("A whole pizza", 15, "Food");
var soda = createMenuItem("Soda", 1, "Drink");
var beans = createMenuItem("Beans", 990, "Food");


console.log(beans.name + " costs $" + beans.price + " and is " + beans.category); //Change "beans" with any other var.
console.log(`${beans.name} costs $${beans.price} and is ${beans.category}`); //Fancier log but the same thing.

console.log(beans.discount("none")); //"teacher" and "student" will both return the price with a discount, anything else such as "none" will give the smaller discount. Also no fancy console.log because it asks for just a number.

///////////////Reviews (MVP)///////////////////

const reviews = [{name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
    {name: "Jack", rating: 3, feedback:"A little too hipster for my taste, but the burger was decent, if overpriced"},
    {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
    {name:"Reyna", rating: 3.5, feedback: ""},
                ]

/* Task 3: Console.log just Julius' feedback */

console.log(`${reviews[5].name} wrote: "${reviews[5].feedback}"`); //Replace "5" with any other person/number.

/* Task 4: Add a new rating with your (fictitious) opinions of the restaurant in the same format as the reviews above. */

reviews.push({name: "Riley", rating: 5, feedback: "Right up my alley, food was perfect; I couldn't be happier!"});

console.log(`${reviews[8].name} gave a ${reviews[8].rating} star rating and wrote: "${reviews[8].feedback}"`); //I have become number 8, by pushing my review at the end.

/* Task 5: Add the following feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays" */

reviews[7].feedback = "This place is chill with really cool people, great for getting work done on weekdays."; //Added some capitalization lol

console.log(`${reviews[7].name} gave a ${reviews[7].rating} star rating and wrote: "${reviews[7].feedback}"`);

/*  Task 6: Write a function to return a review based on the index of the review in the array. */

function getReviewByIndex(array, index) {
  return `${array[index].name} gave the restaurant a ${array[index].rating} star review and their feedback was: ${array[index].feedback}`; 
  }

var number = prompt("Whose review would you like to see? 0 - 7");

console.log(getReviewByIndex(reviews, number));

  

/* Task 7: Write a function to get information about the most recent review called `getLastReview` */


function getLastReview(array) {
  return `${array[array.length -1].name} gave the restaurant a ${array[array.length -1].rating} star review and their feedback was: ${array[array.length -1].feedback}`; //-1 to select the last review. -2 to select the second-to-last review, etc.
} 

console.log(getLastReview(reviews));

///////////////🍔☕️🍽 STRETCH🍔☕️🍽////////////////////

/** STRETCH 1: Write a function called `getReviewByRating` that returns an array containing all reviews in a certain range. Your function should accept: 

  (1) An array of objects
  (2) A rating

  and should return an array of objects. 

  For example, invoking getReviewByRating(reviews, 4) would return [{name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly recommend."},
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."}]
*/

 function getReviewByRating(/* code here */) {
    /* code here */
  }

  
/** STRETCH 2: Write a function called 'getLongestReview' that returns an array containing all reviews longer than 15 words. 
  
Your function should accept: 

  (1) An array of objects

and should return an array of objects. 

  For example, invoking getLongReviews(reviews) would return [
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." }]
*/
  function getLongReviews(/* code here */) {
    /* code here */
  }
  

/* STRETCH 3:  This challenge is not related to the data above! 

Write a function called carMarker 

Your function should accept:

(1) a single odometer argument (a number) 

and return an object.

The returned object should have the following characteristics:
     it has an `odometer` property that contains the argument passed in.
     it has a `drive` method that takes a distance as its argument, and
         (1) causes the odometer in the object to be increased by the distance,
         (2) returns the updated value of the `odometer`.
*/


function carMaker(/* code here */) {
    /* code here */
    
}
