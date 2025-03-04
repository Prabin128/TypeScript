//1. Numeric Enum
//1.1. Default Numeric Enum 
console.log("========================Default Numeric Enum=======================");
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 2+1 = 3
})(Direction || (Direction = {}));
console.log(Direction);
console.log("=============================");
var dir = Direction.Up;
console.log(dir); // Output: 0
//1.2. Numeric Enum - fully Initialized
console.log("=================Numeric Enum - fully Initialized==================");
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 101] = "Up";
    Direction1[Direction1["Down"] = 101] = "Down";
    Direction1[Direction1["Left"] = 322] = "Left";
    Direction1[Direction1["Right"] = 411] = "Right";
})(Direction1 || (Direction1 = {}));
var upDirection = Direction1.Up;
var downDirection = Direction1.Down;
var leftDirection = Direction1.Left;
console.log(upDirection);
console.log(downDirection);
console.log(leftDirection);
//1.3. Numeric Enums - Mix Initialized 
console.log("=================Numeric Enum - Mix Initialized====================");
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 7] = "Left";
    Direction2[Direction2["Right"] = 8] = "Right"; // 7+1 = 8
})(Direction2 || (Direction2 = {}));
var downDir = Direction2.Down;
var rightDir = Direction2.Right;
console.log(downDir);
console.log(rightDir);
//2. String Enums
console.log("============================String Enum============================");
var StringEnum;
(function (StringEnum) {
    StringEnum["Up"] = "UP";
    StringEnum["Down"] = "DOWN";
    StringEnum["Left"] = "LEFT";
    StringEnum["Right"] = "RIGHT";
})(StringEnum || (StringEnum = {}));
var directionString = StringEnum.Left;
console.log(directionString);
//3. Heterogeneous enums
console.log("========================Heterogeneous Enum=========================");
var HeterogeneousEnum;
(function (HeterogeneousEnum) {
    HeterogeneousEnum["Up"] = "UP";
    HeterogeneousEnum[HeterogeneousEnum["Down"] = 1] = "Down";
    HeterogeneousEnum[HeterogeneousEnum["Left"] = 2] = "Left";
    HeterogeneousEnum["Right"] = "RIGHT";
})(HeterogeneousEnum || (HeterogeneousEnum = {}));
var heterogeneousLeftDirection = HeterogeneousEnum.Left;
var heterogeneousRightDirection = HeterogeneousEnum.Right;
console.log(heterogeneousLeftDirection);
console.log(heterogeneousRightDirection);
//Computed Enums
console.log("==========================Computed Enum============================");
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 1] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 2] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 3] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 4] = "Thursday";
    Weekdays[Weekdays["Friday"] = 5] = "Friday";
    Weekdays[Weekdays["Saturday"] = 6] = "Saturday";
    Weekdays[Weekdays["Sunday"] = 7] = "Sunday";
})(Weekdays || (Weekdays = {}));
console.log(Weekdays);
//Real World Example
console.log("=======================Real World Example==========================");
var Role;
(function (Role) {
    Role["SuperAdmin"] = "superAdmin";
    Role["Admin"] = "admin";
    Role["User"] = "user";
})(Role || (Role = {}));
//Create a person object
var person1 = {
    name: "Developer",
    age: 23,
    role: Role.Admin // Using enum to set role
};
console.log(person1);
// Here Comparing with  role .. if we declare  superAdmin  as "super_admin" it throws an error.
if (person1.role === "superAdmin") {
    console.log("This guy is the head of the programming World");
}
else if (person1.role === "admin") {
    console.log("This guy is the cordinator of  this programming world");
}
else {
    console.log("This guy is a noob!!");
}
