"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 3

   Random Jane Austen Quote Generator
   Author: Anthony S,A Gradillas
   Date:   2.12.19
   
   This script randomly generates a Jane Austen quote from
   a list of 10 quotes and writes that quote into the first
   quotation tag in the Web page.

*/
/* A command was inserted to call the function, generating a random number from 0 to 9. The result from the function will be stored in the randomQ variable. */
var size = 10;
var randomQ = randomInt(0, size);

/* A variable named quoteElem refrences the first element in the document the has the quote tag name. The getQuote function is called using the randomQ variable as the parameter value to generate a random Jane Austen quote. */
document.getElementById("quote").innerHTML = getQuote(randomQ);

/* The function named randomInt will be used randomly generate an integer. There are 2 parameters lowest and size. The lowest parameter will specify the lowest value for the random integer and the size is the number of values the random integer can choose from. The 2 parameters and the math.floor and math.random methods will return a random integer within the specified range. */
function randomInt(lowest, size) {
    return Math.floor(Math.random() * size);
}

function getQuote(n) {
    var quotes = [
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        "I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
        "Silly things do cease to be silly if they are done by sensible people in an impudent way.",
        "Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody.",
        "Life seems but a quick succession of busy nothings.",
        "Our scars make us know that our past was for real.",
        "I cannot speak well enough to be unintelligible.",
        "One cannot be always laughing at a man without now and then stumbling on something witty.",
        "Men were put into the world to teach women the law of compromise.",
        "The person, be it gentlemen or lady, who has not pleasure in a good novel, must be intolerably stupid."
    ];

    return quotes[n];
}