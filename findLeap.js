function checkLeap(year) {
    if(!(year % 4)){
        if(!(year % 100)) {
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
};

module.exports = checkLeap;