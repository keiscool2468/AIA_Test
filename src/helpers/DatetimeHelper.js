const moment = require('moment');

const LENGTH_OF_WEEK = 7;

export const getPassedWeek = () => {
    let week = [];
    for (let index = LENGTH_OF_WEEK - 1; index > -1; index--) {
        let date = new Date()
        date.setDate(date.getDate() - index)
        const YYYY = moment(date).format("YYYY");
        const MM = moment(date).format("MM");
        const DD = moment(date).format("DD");
        let YYYYMMDD = `${YYYY}-${MM}-${DD}`
        week.push(YYYYMMDD)
    }
    return week;
}