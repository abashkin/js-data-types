/*
    Boolean operations
    true && false = false
    true || false =  true
    !true = false
    !!true = true
*/

var hasTime = true;
var hasMoney = true;
var hasStrength = true;

var isYoung = hasTime && hasStrength && !hasMoney;
var isAdult = !hasTime && hasStrength && hasMoney;
var isOld = hasTime && !hasStrength && hasMoney;