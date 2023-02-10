function getPasswordChecker (password) {
    let truePassword = password;
    return function (userPassword = 'sier2342') {
        let passwordsMatch = truePassword == userPassword;
        truePassword = NaN;
        return passwordsMatch
    }
}

mtch1 = getPasswordChecker('sier2342');
mtch2 = getPasswordChecker('oiufg1098');

console.log(mtch1());
console.log(mtch1());

console.log(mtch2());
console.log(mtch2());
