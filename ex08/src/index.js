// Lodash
const _ = require("lodash");
// Only change code below this line
// users nested array with four objects starts here
const users = [{
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    {
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male"
    },
    {
        firstName: "Kate",
        lastName: "Winslet",
        age: 40,
        gender: "female"
    }
];
// users nested array with four objects ends here
// getUsers function - list of users starts here
function getUsers() {
    var output = "";
    for (i = 0; i < users.length; i++) {
        output += users[i].firstName + " " + users[i].lastName + " is " + users[i].age + ", " + users[i].gender;
        // console.log(output);
    }
    return output;
    console.log(output);
}
// getUsers function - list of users ends here
// findUser (lastName, gender) starts here

function findUser(lastName, gender) {
    try {
        var user = _.find(users, { lastName, gender });
        var iFindUser = user.firstName + " " + user.lastName + " is " + user.age + ", " + user.gender;
        return iFindUser;
    } catch (error) {
        return "Cannot read property 'firstName' of undefined";
    }
}
// findUser (lastName, gender) ends here
// Only change code above this line
getUsers();
console.log(findUser("Winslet", "female")); // Change this line
module.exports = findUser;