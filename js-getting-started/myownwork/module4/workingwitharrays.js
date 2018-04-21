//
// Fabian Williams Stuff
//

let deck = [
    "Ace of Spades",
    "Two of Spades",
    "Three of Spades",
    "Four of Spades"
];

let playerCards = [ deck[0], deck[2] ];

console.log("Welcome to Blackjack!");

console.log("You are dealt: ");
console.log("  " + playerCards[0]);
console.log("  " + playerCards[1]);

let addnewone = deck.push("Five of Diamonds");

let lastresult = deck.pop();
console.log( "My result is: " + lastresult); //This removes the last item in an array

let firstresult = deck.shift();
console.log("My first item is: " + firstresult); //this removes the 1st item in array

console.log(deck);
deck.splice(1,1);
console.log (deck); //this removes an item first number is the 
                //element postion, secone item is how many to take out
                

deck.push("King of Hearts", "Queen of Hearts", "Jack of Hearts");
console.log(deck);

//The Splice below will remove the 1st 2 items then add 3 more 
deck.splice(0,2,"Ten of Hearts", "Nine of Hearts", "Eight of Hearts");
console.log(deck);


