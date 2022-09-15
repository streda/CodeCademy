const _ = {
    clamp(number, lower, upper) {
        // const low = Math.max(number, lower);
        // const high = Math.min(number, upper);

        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);

        return clampedValue;
    },
    inRange(number, startValue, endValue) {
        if (!endValue) {
            endValue = startValue;
            startValue = 0;
        }
        if (startValue > endValue) {
            let tmp = endValue;
            endValue = startValue;
            startValue = tmp;
        }
        let isInRange = startValue <= number && number < endValue;
        return isInRange;

    },
    words(string) {
        const words = string.split(' ');
        return words;
    },
    pad(string, length) {
        if (length <= string.length) { return string; }
        let startPaddingLength = Math.floor((length - string.length) / 2);
        let endPaddingLength = length - string.length - startPaddingLength;
        let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);

        return paddedString;
    },
    has(object, key) {
        let hasValue = object[key] !== undefined;
        return hasValue;
    },

    // 1. Add a method to our _ object called invert.
    // 2. Add one parameter to this method: "object"
    invert(object) {
        let invertedObject = {}; // 3. Within the method, create a variable called "invertedObject" and 
                                 //    set its value equal to an empty object

        // 4. Using a for ... in loop, iterate through each key in "object"
        for (let key in object) {   
            // 5. create a variable called "originalValue" and 
            //    set it equal to the value at the current "key" in "object"
            let originalValue = object[key];

            // 6. set the value at "originalValue" on "invertedObject" to 
            //    be the current "key"
            invertedObject[originalValue] = key;
        }

        // 7. return the value of "invertedObject"
        return invertedObject;
    },
    findKey(object, predicate ){
        for (let key in object){
            if(predicate(object[key])){
                return key;
            } 
            return undefined;
        }

    },
    drop(array, number){
        let arr = [];
        if(number === undefined){
            number = 1;
        }
        let droppedArray = array.slice(number);
        return droppedArray;

    },

    // Test 
    /* 
        const {invert} = _
        const obj = {1: 'one', 2: 'two', 3: 'three'}
        const objinv = invert(obj)
        const invobj = invert(objinv)
        console.log(objinv)
        console.log(invobj)

        Results in the following solution
            { one: '1', two: '2', three: '3' }
            { '1': 'one', '2': 'two', '3': 'three'
    
    */

    dropWhile(array, predicate){
        let dropNumber = array.findIndex((element, index) => {
            return !predicate(element, index, array);
        });
        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },


    /* 
    
    Reading the Documentation: What is this supposed to do?

From the Lodash Documentation…

[.chunk()] Creates an array of elements split into groups the length of size . If array can’t be split evenly, the final chunk will be the remaining elements.
It takes arguments array and size where array is the array to process and size is the length of each chunk (with a default value of 1).

Checking Default Value

The first thing that needs to be done in our chunk() function is to check if size is defined, and if it isn’t, set it to 1 (which, per the documentation, is the default value). In the code you’ve provided, this is accomplished with the following conditional statement:

if (size === undefined) {
    size = 1;
}
By checking if size is undefined, the function is able to assign a value to it in the case it does not already exist. We can now use size as if it were defined in the function call normally: .chunk(array,1).

While this code works just fine to assign a default value, it is also possible to use JavaScript’s built-in default parameter functionality to do so in shorter form.

Actually Doing Something: The Loop

The goal of this function is to take an array of Objects and to “chunk” the values by a particular size. So; every size Objects are chunked together and pushed into our resultant array. In the code you’ve provided, the logic is as follows:

//Create an empty array to store our chunks
let arrayChunks = ;
//For each chunk of Objects in the original array...
for (let i = 0; i < array.length; i += size) {
    //This particular chunk is from the current position (i)
    //to the end of this chunk (i+size)
    let arrayChunk = array.slice(i, i + size);
    //Add this chunk to our array of chunks
    arrayChunks.push(arrayChunk);
}
In terms of “what does my loop do”, the highest level answer is: It goes through each chunk and adds it to the “master” array of chunks. It accomplishes this by slicing the original array by size number of indices (indexes) and pushing the result to the chunks array. To do this, it makes use of JavaScript’s Array.slice() function… When iterating over each chunk, it starts from i, the start of the current chunk, and ends at i+size, the end of the current chunk (regardless of chunk size).

Of concern now is handling the case when a chunk is not a full chunk (for example, the chunk size is 3, but there are only 2 items available in the chunk). Fortunately, there’s not a whole lot of thought that needs to be put into this; our function is safe to use already because, per the Array.slice() documentation:

If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length ).
In the case where we run out of data, the final slice will be the “remaining elements”, exactly as Lodash intended:

If array can’t be split evenly, the final chunk will be the remaining elements.
What to do with the results?

By this point in the code, there is only one statement left:

return arrayChunks;
We have already completed the task, and arrayChunks holds the chunked values from array, so it’s time to give that back to the function caller: We return the chunked array for use.
    
    */
    chunk(array, size){
        if(size === undefined){
            size = 1;
        }
        let arrayChunks = [];
        for (let i = 0; i < array.length; i = i + size){
            let arrayChunk = array.slice(i, i + size);
            arrayChunks.push(arrayChunk);
        }

        return arrayChunks;
    }

};




// Do not write or modify code below this line.
module.exports = _;