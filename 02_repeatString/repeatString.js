const repeatString = function(word,count) {
    let a = ""
    let i = 0;

    if (count > 0) {
    while (i < count) {
        a += word
        i++
    }} else if (count == 0){
        return ""
    }else {
        return 'ERROR'
    }

    return a; 
};

// Do not edit below this line
module.exports = repeatString;
