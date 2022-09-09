
const {DateTime} = require('luxon');

module.exports = {
    format_date: date => {
        return DateTime.fromISO(new Date(date).toISOString()).toFormat("MMM d, yyyy 'at' HH:mm:ss");
    }
};