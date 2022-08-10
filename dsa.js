let nums = [1, 2, 3, 4, 6, 7, 4]

function removeEvens(numbers) {
    return numbers.filter(n => n % 2 !== 0);
}

const oddNumbers = removeEvens(nums)

// ---------------------------------


let myqueue = ["Me", "James", "Hannah", "Michael", "Liam", "Casey", "Michelle"]
let served = []


let numberOfCustomers =  myqueue.length
console.log(numberOfCustomers)

let customer1 = myqueue.shift()
served.push(customer1)

let customer2 = myqueue.shift()
served.push(customer2)

let customer3 = myqueue.shift()
served.push(customer3)

let customer4 = myqueue.shift()
served.push(customer4)

let noOfCustomers = myqueue.length
let customersRemaining = myqueue



class Node {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
    }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.right = c
a.left = b
b.right = e
b.left = d
c.right = f

//-------------------------------------------------- Manual algorithm -------------------------------------------------------------------

let arrTree = []
let visitedNodes = []

arrTree.push(a)
visitedNodes.push(arrTree.pop())

arrTree.push(a.right)
arrTree.push(a.left)
visitedNodes.push(arrTree.pop())

arrTree.push(b.right)
arrTree.push(b.left)
visitedNodes.push(arrTree.pop())

visitedNodes.push(arrTree.pop())
visitedNodes.push(arrTree.pop())

arrTree.push(c.right)
visitedNodes.push(arrTree.pop())

// --------------------------------------------------------------------------------------------------------------------------------------


const depthFirstValues = (root) => {
    if (root === null) return []                                                    //If tree is empty

    const stack = [root]                                                            //Initial = root
    const visitedNodes = []

    while (stack.length > 0) {
        let current = stack.pop()                           //Pop last element and make it "current" node being explored
        visitedNodes.push(current.val)                      //Push it to visitedNodes array

        if (current.right) stack.push(current.right)                     //if it has a right child, push it to stack
        if (current.left) stack.push(current.left)                       //if it has a left child, push it to stack
    }

    return visitedNodes
}



const breadthFirstValues = (root) => {
    if (root === null) return [];

    const queue = [root]
    const visitedNodes = []

    while (queue.length > 0) {
        let current = queue.shift()
        visitedNodes.push(current.val)

        if (current.right) queue.push(current.right)
        if (current.left) queue.push(current.left)
    }

    return visitedNodes
}



