// Find 1st, Find Nth (last item)

// const array = ['hi', 'my', 'teddy'];
// array[0]; // get oldes // O(1)
// array[array.length - 1]; // 2 teddy // O(1)

// compare the dates of tweets
//But now our boss comes back to us and say, Hey, I want you to compare the dates of tweets.
//So I want you to look at every tweet.
//Now, within each array, there's an object with each tweet.

const array = [{
    tweet: 'hi', 
    date: 2012
}, {
    tweet: 'my', 
    date: 2014
}, {
    tweet: 'teddy', 
    date: 2018
}];

// we are comparing each item in the array with the other so we are doing nested loops which will be O(n^2)

// what happens and what is the operation and what is going to cost in terms of time complexity?
'helwosdifkjdfisusugehsdh'.length // O(1) // Constant time

// BigO notation of this? it depends on the language you are working with
//We need to know how the method works on the string here and that's built into JavaScript and you'll
//have a different built in method for your language based on how the language is built.
// in JS the length property on a string is a simple lookup not a function, its a property of an object