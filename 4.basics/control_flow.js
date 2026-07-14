//if
let isUserActive = true
if(true){
    // console.log("user active");
}

//shorthand notation
// if(balance>1000) console.log("KYC is mandatory");

//if else
let score = 380
if (score > 300) {
    let power = "extra life"
    // console.log(`user power: ${power}`);
} else {
    // console.log(`user power: double kill`);
}

let age = 17;
let hasLicense = false;
let hasLearnerLicense = true;

if ((age >= 18 && hasLicense) || hasLearnerLicense) {
    console.log("Allowed to drive");
} else {
    console.log("Not allowed to drive");
}

//else if
let balance = 3000;
let verification = true;

if (!verification) {
    console.log("Please verify through KYC");
} else if (balance < 500) {
    console.log("Insufficient balance");
} else if (balance <= 1000) {
    console.log(`Low balance: ${balance}`);
} else {
    console.log(`Current balance: ${balance}`);
}

//switch case
const month = 3
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;
    case 4:
        console.log("apr");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("jun");
        break;
    case 7:
        console.log("jul");
        break;
    case 8:
        console.log("aug");
        break;
    case 9:
        console.log("sep");
        break;
    case 10:
        console.log("oct");
        break;
    case 11:
        console.log("nov");
        break;
    case 12:
        console.log("dec");
        break;
    default:
        console.log("invalid month");
        break;
}