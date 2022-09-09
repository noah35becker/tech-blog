
module.exports = {
    format_date: date => {
        const dateAsDateObj = new Date(date);
        return `${dateAsDateObj.getMonth() + 1}/${dateAsDateObj.getDate()}/${dateAsDateObj.getFullYear()}`;
    },
    
    format_plural: (word, amount) => amount == 1 ? word : word + 's',
};