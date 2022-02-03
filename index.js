/*
  You may use the following animals array to test your functions inside of this file. This is the same array of animals that is used in the tests.
  
  To run this file, remember that you can run `node index.js` from the command line. You will need to be in the directory where the `index.js` file is kept for the above command to work.

  Finally, remember that in order for you to see output on the command line, you must log something out.
*/
const animals = [
  { kind: "Pig", count: 5 },
  { kind: "Cow", count: 7 },
  { kind: "Chicken", count: 11 },
  { kind: "Horse", count: 1 },
  { kind: "Dog", count: 2 },
  { kind: "Cat", count: 2 },
];

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Adds up the `count` key of each animal in the array and returns a total.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {number} The total of all animal counts.
 *
 * EXAMPLE
 * ------------------
 * getTotalCount(animals); //> 28
 * getTotalCount([]); //> 0 // returns 0 if the input array is empty
 */

function getTotalCount(animals) {
  let sum = 0
  for (let animal of animals){
    sum += animal.count
    // accessing our count key with animal.count and incrememnting
  }
  return sum
  // returns our sum . set outside our loop in case there is nothing to sum in which case we skip to this step.
}

// we have an array object, key is animal name and value is count (number)
//we have to access this object count and sum (increment)
// we must return the SUM 
// we must set an edge case where we could potentially return 0 on an empty object array

//should solve with standard incremement, set edge case as default exit if loop isn't excuted -- i.e return the 
//set variable for the sum = 0  . 

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the `kind` for each object from the inputted array.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {string[]} An array of strings, where each string is a kind of animal.
 *
 * EXAMPLE
 * ------------------
 * getAllKinds(animals); //> ["Pig", "Cow", "Chicken", "Horse", "Dog", "Cat"]
 * getAllKinds([]); //> [] // returns empty array if input array is empty
 */
function getAllKinds(animals) {
  let newArr = []
  //task is to return array. must set up array.
  for (let animal of animals){
    newArr.push(animal.kind)
  }
  return newArr
  // edge case out side of for loop to return empty arr if necessary
}

//now we need to assess the animal kind senctin of our object array  and return it in as string elements INSIDE an array.
//this meanas we need to create an empty array to potentially push into.  choose is non destructive so it is first choice but will try others if this doesn't work
// should also set an exit (edge) case in case our array input is empty.  will set similarly as the first problem
//

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns all objects inside the given array where the `count` of an animal is equal to or greater than the `minimum` amount.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @param {number} minimum - The lowest count of animals to include.
 * @returns {Object[]} An array of objects, which represents all animals that have a count equal to or greater than the minimum.
 *
 * EXAMPLE
 * ------------------
 * filterByCountMinimum(animals, 5); //> [
    { kind: "Pig", count: 5 },
    { kind: "Cow", count: 7 },
    { kind: "Chicken", count: 11 },
  ];
 * filterByCountMinimum([], 3); //> [] // returns empty array if input array is empty
 */

// multi step problem.  pay close attention to task . compermentalize. 
// must create a new array. must set return at end outside of my loop condition again similarly to first two problems to set up for edge cases (empty)
// task asks for EQUAL TO OR GREATER THAN  >= !!
// will be returning ENTIRE object (KEY AND VALUE ). 

function filterByCountMinimum(animals, minimum) {
  let newArr = []
  for (let animal of animals){
    if (animal.count >= minimum)
    newArr.push(animal)
  }
  return newArr
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the object with the highest `count`. If more than one object shares the same highest `count`, return the first one.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {Object} The object which represents the animal with the highest count.
 *
 * EXAMPLE
 * ------------------
 * getMostCommonAnimal(animals); //> { kind: "Chicken", count: 11 }
 * getMostCommonAnimal([]); //> null // returns null if the input is empty
 */
function getMostCommonAnimal(animals) {
  let mostCommon = animals[0]
  if (animals.length === 0){  
    mostCommon = null
    }for (let animal of animals){
       if (animal.count > mostCommon.count){
        mostCommon = animal
      }
   }
  return mostCommon
}

//must return an OBJECT. different from last two problems.
//must return the FIRST object with the highest count.
// return entire object not just the count or the kind.
// we cannot return MORE than one animal. (assumption)
//how can we set this up. --- can we set up a break in our loop to exit after our condition is met ? (WRONG APPROACH!)
//realized that we can't break because we need to sift through our WHOLE loop to find out whats bigger than what.
//since we are comparing we should start at index 0 and compare every animal after to this animal and replace this rotating comparison variable as needed.
//must also return NULL if we find nothing. can we set this up as acloser like we did before?

// could not set up a closer.. not sure why.  had to set up in beginnign of code .  will ask in class .

// after 40 minutes i realized I could set my condition before my loop...FINALLY!.  
// Do not change anything below this line.
module.exports = {
  getTotalCount,
  getAllKinds,
  filterByCountMinimum,
  getMostCommonAnimal,
};
