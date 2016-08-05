//Create a linked list data structure:

function LinkedList() {
    this.head = null;
    this.size = 0;
}

function Node(data) {
    this.data = data;
    this.next = null;
}

LinkedList.prototype.addNode= function(data) {
    if(this.head === null) {
        this.head = new Node(data);
    } else {
        var current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        current.next = new Node(data);
    }
    this.size = this.calculateSize();
};

//Delete a node from a singly linked list:
LinkedList.prototype.deleteNode = function(data) {
    var current = this.head;
    var prev = null;

    if(current.data === data) {
        this.head = current.next;
        return this.head;
    }

    while(current.data !== data) {
        if(current.next === null) {
            return "Value not found!";
        }
        prev = current;
        current = current.next;
    }
    prev.next = current.next;
    // this.calculateSize();
    return this.head;
};

LinkedList.prototype.calculateSize = function() {
    var size = 0;
    var current = this.head;
    while(current !== null) {
        size +=1;
        current = current.next;
    }
    return size;
};


LinkedList.prototype.cleanDups = function() {
    var refObj = {};
    var current = this.head;
    while(current !== null) {
        if(!refObj[current.data]) {
            refObj[current.data] = true;
            current = current.next;
        } else {
            this.deleteNode(current.data);
            current = current.next;
        }
    }
    return this.head;
};



var list = new LinkedList();
list.addNode("One");
list.addNode("Two");
list.addNode("Three");
list.addNode("Four");
list.addNode("Five");
list.addNode("Four");
list.addNode("Three");
list.addNode("Two");
list.addNode("One");





//Implement an algorithm to find kth to last element of a singly linked list.
// Example, second to last will be "Four" in the previous example. Delete it.

// Can we find length of the linked list? It's a horrible data structure.
// We could have a function which would help traverse to the nth element. Or last element.
// Maybe we implement that. Okay? Shit we don't have a way to see what's the previous
// node without the previous pointer. Shit. Alright. But if we create a previous pointer
// It's not going to just go back but it's going to create a new path. The elements
// already exist. It seems wasteful to just go back.

//Too much thought. Just implement.

function kthToLast(listHead, k) {
    if(listHead === null) {
        return 0;
    }
    var index = kthToLast(listHead.next, k) +1;
    if(index == k) {
        console.log("kth (" +k +") element of the list provided is " +listHead.data);
    }
    return index;
}


// kthToLast(list.head, 3);

//FRICKING BEAUTIFUL!!!!

var nthToLast = function(head, n) {
    if(head === null) {
        return 0;
    }
    var index = nthToLast(head.next,n)+1;
    if(index === k) {
        console.log(head.data);
    }
    return index;
};

//Delete Middle node: Implement an algorithm to delete the node in the middle.
// (Any node but the first and the last node)
//You're only given access to that node:


//WTF?

//

var numList = new LinkedList();
numList.addNode(3);
numList.addNode(5);
numList.addNode(8);
numList.addNode(10);
numList.addNode(2);
numList.addNode(1);
// numList.addNode(19);
// numList.addNode(14);
// numList.addNode(22);


function sortList(list, num) {
    var before = new LinkedList();
    var after = new LinkedList();
    var containsVal = null;

    var current = list.head;
    while(current !== null) {
        if(current.data >= num) {
            if(current.data === num) {
                containsVal = current;
            }
            after.addNode(current.data);
        } else if(current.data < num) {
            before.addNode(current.data);
        }
        current = current.next;
    }

    console.log(before);
    console.log(after);

    list.head = null;
    list.head = before.head;
    var currentAfter = after.head;
    while(currentAfter !== null) {
        list.addNode(currentAfter.data);
        currentAfter = currentAfter.next;
    }

    return list;

}

// console.log(sortList(numList, 5));

//617 + 295

var firstNum = new LinkedList();
firstNum.addNode(7);
firstNum.addNode(1);
firstNum.addNode(6);

var secondNum = new LinkedList();
secondNum.addNode(5);
secondNum.addNode(9);
secondNum.addNode(2);

function addNumLists(first,second) {
    function listToNum(list) {
        var current = list.head;
        var arr = [];
        while(current !== null) {
            arr.push(current.data);
            current = current.next;
        }
        return Number(arr.reverse().join(""));
    }

    function numToList(num) {
        var arr = num.toString().split("").reverse();

        var newList = new LinkedList();

        arr.forEach(function(elem) {
            newList.addNode(elem);
        });

        return newList;
    }

    var sum = listToNum(first) + listToNum(second);

    return numToList(sum);
}

// console.log(addNumLists(firstNum, secondNum));

function recursionTest(num) {
    //End condition for the expression
    if(num === 6) {
        return 0;
    }
    console.log("first");

    //We can iterate through the stuff and get the first values. Could we do this in two ways?
    //I could write two for loops. That would work right? Why this?

    //The test expression
    var index = recursionTest(num-1) +1;
    console.log("second");
    return index;
}

// recursionTest(10);

//Check if the list is a palindrome.

var palinList = new LinkedList();
palinList.addNode(1);
palinList.addNode(2);
palinList.addNode(3);
palinList.addNode(4);
palinList.addNode(5);
palinList.addNode(4);
palinList.addNode(3);
palinList.addNode(2);
palinList.addNode(1);


// console.log(palinList);

function linkPalindrome(list) {
    var current = list.head;
    var tempArr = [];
    var firstHalf;
    var secondHalf;
    while(current !== null) {
        tempArr.push(current.data);
        current = current.next;
    }

    function compareArrays(arr1,arr2) {
        for(var i=0; i<arr1.length; i++) {
            if(arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }

    if(tempArr.length % 2 === 0) {
        firstHalf = tempArr.slice(0, tempArr.length/2).join;
        secondHalf = tempArr.slice(tempArr.length/2, tempArr.length).reverse();
        console.log(compareArrays(firstHalf,secondHalf));
    } else {
        var arrLength = tempArr.length;
        var middleElemIndex = Math.ceil(arrLength/2);
        firstHalf = tempArr.slice(0, middleElemIndex-1);
        secondHalf = tempArr.slice(middleElemIndex, arrLength).reverse();
        console.log(compareArrays(firstHalf,secondHalf))
    }
}

// linkPalindrome(list);

//Reverse and compare:
function linkPalindrome2(list) {
    var current = list.head;
    var newList = new LinkedList();
    while(current !== null) {
        newList.addNode(current.data);
        current = current.next;
    }
    current = list.head;
    var newListCurr = newList.head;
    while(current !== null) {
        console.log(current.data);
        console.log(newListCurr.data);
        if(current.data !== newListCurr.data) {
            return false;
        } else {
            current = current.next;
            newListCurr = newListCurr.next;
        }
    }
    return true;
}

var newList = new LinkedList();
newList.addNode("s");
newList.addNode("u");
newList.addNode("n");
newList.addNode("u");
newList.addNode("s");

//Linked list palindrome?

//reversing a linked list:
function reverseList(list) {
    var reversedList = new LinkedList();
    var current = list.head;
    var newArr = [];
    while(current !== null) {
        newArr.push(current.data);
        current = current.next;
    }
    newArr.reverse();
    newArr.forEach(function(elem) {
        reversedList.addNode(elem);
    });

    return reversedList;
}

//Test linked list equality:

function listEqualCheck(list1,list2) {
    var current1 = list1.head;
    var current2 = list2.head;

    while(current1!== null || current2 !== null) {
        if(current1.data !== current2.data) {
            return false;
        }
        current1 = current1.next;
        current2 = current2.next;
    }
    return current1.next === null && current2.next === null;
}

// console.log(listEqualCheck(firstNum, reverseList(firstNum)));



//Iterative approach:

function isPalindromeIterative(list) {
    var fast = list.head;
    var slow = list.head;
    var stack = [];
    while (fast !== null && fast.next !== null) {
        stack.push(slow.data);
        slow = slow.next;
        fast = fast.next.next;
    }

    if(fast != null) {
        slow = slow.next;
    }

    while(slow !== null) {
        var top = stack.pop();

        if(top != slow.data) {
            return false;
        }
        slow = slow.next;
    }
}

//Create an intersecting linked list.

var list1 = new LinkedList();
list1.addNode("1");
list1.addNode("2");
list1.addNode("3");
list1.addNode("4");
var x = new Node("Connecting what?");
list1.addNode(x.data);
list1.addNode("5");


var list2 = new LinkedList();

list2.addNode("3");
list2.addNode("4");
list2.addNode(x.data);
list2.addNode("5");

// console.log(list1);
// console.log(list2);





