
const {DateTime} = require('luxon');

module.exports = {
    format_date: date => {
        return DateTime.fromISO(new Date(date).toISOString()).toFormat("MMM d, yyyy 'at' HH:mm:ss");
    },

    format_plural: (word, quantity) => quantity === 1 ? word : word+'s',

    compare: (a, b) => a === b
};