const moment = require('moment');

const LENGTH_OF_WEEK = 7;

//Helper function to getting passedWeek in array
export const getPassedWeek = () => {
    let week = [];
    let date = getHKnewDate();
    for (let index = 0; index < LENGTH_OF_WEEK; index++) {
        if(index) {
            date.setDate(date.getDate() - 1);
        } else {
            date.setDate(date.getDate());
        }
        const YYYY = moment(date).format("YYYY");
        const MM = moment(date).format("MM");
        const DD = moment(date).format("DD");
        let YYYYMMDD = `${YYYY}-${MM}-${DD}`;
        week.push(YYYYMMDD);
    }
    return week;
}


//Helper function to getting current datetime string in hong kong time zone
export const getHKnewDate = () => {
    var hkTimeString = new Date().toLocaleString("en-US", {timeZone: "Asia/Hong_Kong"});
    var hkTime = new Date(hkTimeString);
    return (hkTime)
}

//Helper function to getting date string in YYYYMMDD format
export const getYYYYMMDD = (datetimeString, separator = '-') => {
    const YYYYMMDD = `${moment(datetimeString).format("YYYY")}${separator}${moment(datetimeString).format("MM")}${separator}${moment(datetimeString).format("DD")}`
    return YYYYMMDD;
}