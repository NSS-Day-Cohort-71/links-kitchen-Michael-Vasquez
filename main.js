/*
    we have a cook function that has two parameters
    we want to be able to invoke the function and get the completed dish and not the ingredients
    an array of objects will be good as we can can have a first and second ingredient property, with a dish property with their associated values
    we can take the array of objects and store it in a variable for later use if necessary
    look at how this ingredient and that ingredient and other ingredient are used and if not used we skip them until match
    look up how to use more parameters and arguments when some cookedDish have three or four ingredients
    have a statement that says that no dishes can be made instead of nothing in the terminal. 
    look up ways later to simplify code when your knowledge has improved
*/
const materials = [{        // This is my material array of objects with 8 objects
        id: 1,
        ingredientOne: "Hylian Rice",
        ingredientTwo: "Big Hearty Truffle",
        cookedDish: "Mushroom Rice Balls"
},{
        id: 2,
        ingredientOne: "Hateno Cheese",
        ingredientTwo: "Bird Egg",
        cookedDish: "Cheesy Omelette"   
},{
        id: 3,
        ingredientOne: "Tabantha Wheat",
        ingredientTwo: "Hateno Cheese",
        cookedDish: "Cheesy Hylian Pizza"
},{
        id: 4,
        ingredientOne: "Raw Prime Meat",
        ingredientTwo: "Hylian Rice",
        cookedDish: "Prime Meat and Rice Bowl"
},{
        id: 5,
        ingredientOne: "Fresh Milk",
        ingredientTwo: "Cane Sugar",
        ingredientThree: "Bird Egg",
        cookedDish: "Egg Pudding"
},{
        id: 6,
        ingredientOne: "Tabantha Wheat",
        ingredientTwo: "Cane Sugar",
        ingredientThree: "Goat Butter",
        ingredientFour: "Bird Egg",
        cookedDish: "Egg Tart"
},{
        id: 7,
        ingredientOne: "Hylian Rice", 
        ingredientTwo: "Raw Prime Meat", 
        ingredientThree: "Bird Egg", 
        cookedDish: "Chicken Egg Fried Rice"
},{
        id: 8,
        ingredientOne: "Hylian Rice", 
        ingredientTwo: "Goat Butter", 
        ingredientThree: "Bird Egg", 
        ingredientFour: "Raw Bird Thigh",
        cookedDish: "Poultry Pilaf"
}]

const materialsArray = materials        // The materialsArray is assigned the materials array of objects for later use if need be

const meals = []        // assigning meals an empty array for later when invoking the function, we use the .push() method to pass in the object we want

const cook = (firstIngredient, secondIngredient, thirdIngredient, fourthIngredient) => {    // cook() with four parameters
    meals.length = 0                                                                        // initializes meals to 0 when function is invoked elsewhere to prevent data being stored in meals array
    let isThereAMatch = false                                                               // wanted to have a flag marker assigned false as if there are no  
                                                                                            // matches later in the function, I can console.log() line 98               
    for (const ingredient of materialsArray) {      // use for..of loop to iterate the array of objects
        if (thirdIngredient === undefined && fourthIngredient === undefined) {  // by using this if statement I can use my and operator and if exactly undefined I can use two parameters when checking my conditions for matching the ingredients 
            if (firstIngredient === ingredient.ingredientOne &&                 // I use the && operator in lines 69 to 71 to say I want exactly these ingredients and only those ingredients
                secondIngredient === ingredient.ingredientTwo && 
                ingredient.ingredientThree === undefined && 
                ingredient.ingredientFour === undefined) {
                meals.push(ingredient.cookedDish)                           // I use the .push() method to pass in the cookedDish object to my meals array
                isThereAMatch = true                                        // line 74 isThereAMatch is assigned true as a way to flag check that if true I have ingredients that match a cookedDish 
                break                                                       // break is used when the condition is met, it stops the loop
            }
        } else if (fourthIngredient === undefined) {
                if (firstIngredient === ingredient.ingredientOne && 
                    secondIngredient === ingredient.ingredientTwo && 
                    thirdIngredient === ingredient.ingredientThree && 
                    ingredient.ingredientFour === undefined) {
                    meals.push(ingredient.cookedDish)
                    isThereAMatch = true
                    break
            }
        } else {
            if (firstIngredient === ingredient.ingredientOne && 
                secondIngredient === ingredient.ingredientTwo && 
                thirdIngredient === ingredient.ingredientThree && 
                fourthIngredient === ingredient.ingredientFour) {
                meals.push(ingredient.cookedDish)
                isThereAMatch = true
                break
            }
        }
    }
    if (!isThereAMatch) {                               // if isThereAMatch is still false this line is read when the function is invoked
        console.log(`Failed! No dishes can be made!`)
    }
    
    return meals            //returns the meals array with its object
}

console.log('MEALS:')
console.log('---------------')
cook( "Hylian Rice", "Goat Butter", "Bird Egg", "Raw Bird Thigh" )      // invoking my function with my arguments

for (const meal of meals) {                             //I use this for..of loop to iterate through the meals array and using template literals on line 109 and 
        console.log(`Success! You made ${meal}!`)       // using string interpolation to get the object in my meals array and make it a string
    }
