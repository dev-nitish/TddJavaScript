function checkLeap(year) {
    if(!year % 4){
        if(!year % 100) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};

module.exports = checkLeap;