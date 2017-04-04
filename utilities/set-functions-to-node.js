// functions for working with sets
// source: https://developer.mozilla.org/
//         en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// example of defining a set data structure
//    alphabet = ['A', 'B', 'C', 'D',
//        'E', 'F', 'G',
//        'H', 'I', 'J', 'K', 'L', 'M', 'N',
//        'O', 'P', 'Q', 'R', 'S', 'T', 'U',
//        'V', 'W', 'X', 'Y', 'Z'
//    ];
//    alphabetSet = new Set(alphabet);
// example of testing if a set contains an element
// alphabetSet.has('A') // => true
// alphabetSet.has('1') // => false

Set.prototype.isSuperset = function(subset) {
    for (var elem of subset) {
        if (!this.has(elem)) {
            return false;
        }
    }
    return true;
}

Set.prototype.union = function(setB) {
    var union = new Set(this);
    for (var elem of setB) {
        union.add(elem);
    }
    return union;
}

Set.prototype.intersection = function(setB) {
    var intersection = new Set();
    for (var elem of setB) {
        if (this.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}

Set.prototype.difference = function(setB) {
    var difference = new Set(this);
    for (var elem of setB) {
        difference.delete(elem);
    }
    return difference;
}

// Examples
// var setA = new Set([1, 2, 3, 4]),
// setB = new Set([2, 3]),
//    setC = new Set([3, 4, 5, 6]);

// setA.isSuperset(setB); // => true
// setA.union(setC); // => Set [1, 2, 3, 4, 5, 6]
// setA.intersection(setC); // => Set [3, 4]
// setA.difference(setC); // => Set [1, 2]

