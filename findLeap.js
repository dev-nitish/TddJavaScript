function checkLeap(year) {
    if(!year % 4){
        return true;
    }
    else {
        return false;
    }
};

module.exports = checkLeap;