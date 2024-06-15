const sumAll = function(start,end) {
    let count = 0;

    if (typeof start == 'number' && typeof end == 'number') {
        if (start > 0 && end > 0) {
            if (end > start) {
                for (let i = start; i <= end; i++) {
                    count += i
                }
            } else {
                for (let i = end; i <= start; i++) {
                    count += i
                }
            }
        } else return 'ERROR'
    } else return 'ERROR'
    
    return count;
};

// Do not edit below this line
module.exports = sumAll;
