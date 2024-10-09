const accountId =144955
let accountmail= "ankit@gmail.com"
var accountpass= "abcd"
accountCity = "Gorakhpur"

let accountState;

// accountId= 6 // not allowed

accountmail= "abs@gmail.com"
accountpass="1234"
accountCity="Prayagraj"

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountmail, accountpass, accountCity, accountState]);
