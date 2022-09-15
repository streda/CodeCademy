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