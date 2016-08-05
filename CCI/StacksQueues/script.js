//Stack uses Last In First Out:


function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    this.top-=1;
    return this.dataStore.pop();
}

function peek() {
    return this.dataStore[this.top-1];
}

function length() {
    return this.top;
}

function clear() {
    this.dataStore = [];
    this.top = 0;
    return "Stack Cleared";
}


// Test:

// var owTeam = new Stack();
//
// owTeam.push("Sunny");
// owTeam.push("Sid");
// owTeam.push("Jas");
// owTeam.push("Nitish");
//
// console.log(owTeam.pop());
// console.log(owTeam);
// console.log(owTeam.peek());
// console.log(owTeam.clear());
// console.log(owTeam);


function convertNum(num,base) {
    var dividend = num;
    var resultStr = "";
    var resultStack = new Stack;
    while(dividend !== 0) {
        resultStack.push(dividend % base);
        dividend = Math.floor(dividend/base);
    }
    while (resultStack.length()) {
        resultStr = resultStr + resultStack.pop();
    }
    return resultStr;
}

// console.log(convertNum(357,4));


function palindromeCheck(str) {
    var forwardStr = "";
    var reversedStr = "";
    var palinStack = new Stack;
    for(var i=0; i<str.length; i++) {
        if(str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90 || str[i].charCodeAt()>= 97 && str[i].charCodeAt() <= 122) {
            forwardStr = forwardStr + str[i].toLowerCase();
            palinStack.push(str[i].toLowerCase());
        }
    }

    while(palinStack.length()) {
        reversedStr = reversedStr + palinStack.pop();
    }

    if(reversedStr === forwardStr) {
        console.log("'" +str +"' is a palindrome");
    } else {
        console.log("'" +str +"' is not a palindrome");
    }
}

// palindromeCheck("Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man; a prisoner up to new era.");

function factorial(num) {
    var result = 1;
    while(num !== 0) {
        result = num * result;
        num--;
    }
    return result;
}

//Exercises

//Balanced Parens

function parenType(char) {
    var openers = ['{','[','('];
    var closers = ['}',']',')'];

    for(var i=0; i<openers.length; i++) {
        if(openers[i] === char) {
            return "opener";
        }
    }
    for(var j=0; j<openers.length; j++) {
        if(closers[j] === char) {
            return openers[j];
        }
    }
    return null;
}

function checkBalance(exp) {
    var stack = new Stack;
    for(var i=0; i<exp.length; i++) {
        if(parenType(exp[i]) === "opener") {
            stack.push(exp[i]);
        } else if(parenType(exp[i])) {
            if(stack.peek() === parenType(exp[i])) {
                stack.pop();
            } else {
                console.log("Invalid closing at " +i);
                return false;
            }
        }
    }
    if(stack.length() === 0) {
        return true;
    }
}


// console.log(checkBalance("[({)}]"));


//pez dispenser

function removePillets(pez, color) {
    var originalStack = new Stack();
    pez.forEach(function(pillet) {
        originalStack.push(pillet);
    });
    // console.log(originalStack.dataStore);
    var tempStack = new Stack();

    while(originalStack.length()) {
        if(originalStack.peek() === color) {
            originalStack.pop();
        } else {
            tempStack.push(originalStack.pop());
        }
    }

    // console.log(tempStack.dataStore);

    while(tempStack.length()) {
        originalStack.push(tempStack.pop());
    }

    return originalStack.dataStore;
}


var pez = ['r','b','y','r','y','y','r','b','y','c','p','y','y','b'];
// console.log(removePillets(pez, 'y'));


// Queues

function Queue() {
    this.dataStore = [];
}

Queue.prototype.length = function() {
    return this.dataStore.length;
};

Queue.prototype.enqueue = function(item) {
    this.dataStore.push(item);
};

Queue.prototype.dequeue = function() {
    return this.dataStore.shift();
};

Queue.prototype.front = function() {
    return this.dataStore[0];
};

Queue.prototype.back = function() {
    return this.dataStore[this.length()];
};

Queue.prototype.clear = function() {
    return this.dataStore = [];
};

Queue.prototype.toString = function() {
    return this.dataStore.join(',');
};

var Dancer = function(sex,name) {
    this.name = name;
    this.sex = sex;
};

var danceQueue = new Queue;

danceQueue.enqueue(new Dancer('F','Allison McMillan'));
danceQueue.enqueue(new Dancer('M','Frank Opitz'));
danceQueue.enqueue(new Dancer('M', 'Mason McMillan'));
danceQueue.enqueue(new Dancer('M', 'Clayton Ruff'));
danceQueue.enqueue(new Dancer('F', 'Cheryl Ferenback'));
danceQueue.enqueue(new Dancer('M', 'Raymond Williams'));
danceQueue.enqueue(new Dancer('F', 'Jennifer Ingram'));
danceQueue.enqueue(new Dancer('M', 'Bryan Frazer'));
danceQueue.enqueue(new Dancer('M', 'David Durr'));
danceQueue.enqueue(new Dancer('M', 'Danny Martin'));
danceQueue.enqueue(new Dancer('F', 'Aurora Adney'));

function pairDancers(queue) {
    var pairs = [];
    var waiting = new Queue;
    while(queue.length()) {
        var dancer = queue.dequeue();
        if(!waiting.length()) {
            waiting.enqueue(dancer);
        } else if(waiting.front().sex !== dancer.sex) {
            pairs.push([dancer.name, waiting.dequeue().name]);
        } else {
            waiting.enqueue(dancer);
        }
    }


    pairs.forEach(function(pair) {
        console.log(pair[0] +" and " +pair[1] +" are dancing");
    });

    console.log("There are also " +waiting.length() +" people waiting to dance:");
    waiting.dataStore.forEach(function(dancer) {
        console.log(dancer.name +" " +dancer.sex);
    });
    return null;
}

// console.log(pairDancers(danceQueue));

function createQueue(arr) {
    var queue = new Queue;
    arr.forEach(function(elem) {
        queue.enqueue(elem);
    });

    return queue;
}


function radixSort(arr) {
    var queue = createQueue(arr);
    var binQueue = new Queue();
    var length = queue.length();
    while(queue.length()) {
        var currentNum = queue.dequeue();
        var binNum = currentNum.toString()[1];
        binQueue.dataStore[binNum] = new Queue;
        binQueue.dataStore[binNum].enqueue(currentNum);
    }

    while(queue.length() !== length) {
        
    }
    return binQueue.dataStore;
}

console.log(radixSort([12,42,53,34,15]));






















