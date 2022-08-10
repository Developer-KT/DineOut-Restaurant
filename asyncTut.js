let myPromise = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

myPromise.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})

// ------------------------------------------------------------------

let ride = new Promise((resolve, reject) => {
    let arrived = true
    if (arrived) {
        resolve('driver arrived')
    } else {
        reject('driver bailed')
    }
})

ride.then(value => {
    console.log(value);
}).catch(error => {
    console.log(error);
})



function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum)
}

function myDisplayer(some) {
    document.getElementById("demo").innerHTML= some
}

myCalculator(5, 5, myDisplayer);

console.log(some)


// ------------------------------------------------------- Async/Await ------------------------------------------------------------------


async function myFunction() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 2000)
    });

    let result = await promise

    console.log(result);
}

myFunction();

function cons() {
    console.log("loading...");
    return
}

cons();



// -------------------------------------------------------- ------------------------------------------------------------
let users = [{
    "name": "Tyler",
    "lastName": "Jones",
    "age": 21,
    "cars": ["Audi A4", "Ford Mustang"],
    "child": {
        "name": "Minnie",
        "gender": "female",
        "age": 1
    }
},
{
    "name": "Tyler",
    "lastName": "Jones",
    "age": 21,
    "cars": ["Audi A4", "Ford Mustang"],
    "child": {
        "name": "Minnie",
        "gender": "female",
        "age": 1
    }
}]

console.log(JSON.parse(users));


// -----------------------------------------------

let millionaire = {
    "name": "Thando",
    "lastName": "Jones",
    "age": 22,
    "cars": [
        "Mercedes Benz C-Class",
        "Ford Mustang GT",
        "Porsche 911 Turbo S"
    ],
    "businesses": [
        {
            "name": "OnlyFries",
            "employess": "6",
            "monthly": 175000
        },
        {
            "name": "IndoorPlay",
            "employess": "6",
            "monthly": 275000
        }
    ]
}

JSON.stringify(millionaire)

// ------------------------------------------------------ HTTP requests ---------------------------------------------------------


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();

// -----------------------------------------------------------------------------------------------------------

function firstAction() {
    console.log("First!")
    setTimeout(secondAction, 2000)
}

function secondAction() {
    console.log("Second!")
}

setTimeout(() => firstAction(), 5000)