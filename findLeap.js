function checkLeap(year) {
    if(!(year % 4)){
        if(!(year % 100)) {
            if(!(year % 400)) {
                return true;
            }
            else {
                return false;
            }
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