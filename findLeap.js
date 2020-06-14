function checkLeap(year) {
    return(!(year % 4) ? (!(year % 100) ? (!(year % 400) ? true : false) : true) : false);
};

module.exports = checkLeap;