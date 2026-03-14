const accountId = 14555
let accountEmail = "bantiprasadsahoo2004@gmail.com"
var accountPassword = "12345"
accountCity = "Odisha"
let accountState;

// accountId = 2 //not allowed

accountEmail = "hv@hv.com"
accountPassword = "2121233"
accountCity = "Balasore"

/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);