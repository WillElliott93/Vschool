function capilizeAndLowercase(string) {
    let upperCase = string.toUpperCase();
    let lowerCase = string.toLowerCase();
    let result = upperCase + lowerCase;
    
    return result;
}
console.log(capilizeAndLowercase("hElLo"));

function findMiddleIndex(string) {
    let middle = Math.floor(string.length / 2);
    
    return middle;
}
console.log(findMiddleIndex("hello"));

function returnFirstHalf(string) {
    let splitMiddle = findMiddleIndex(string)
    let firstMiddle = string.slice(0, splitMiddle)

    return firstMiddle
}
console.log(returnFirstHalf("123456789"))

function capilizeAndLowercaseString(string) {
    let halfString = findMiddleIndex(string)
    let firstHalf = string.slice(0, halfString).toUpperCase()
    let secondHalf = string.slice(halfString).toLowerCase()

    return firstHalf + secondHalf
}
console.log(capilizeAndLowercaseString("jjjjjjjjjQQQQQQQQQ"))