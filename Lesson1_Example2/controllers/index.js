const awesomeFunction = (req, res, next) => {
    res.json('Martine Spagnolini');
};

const returnAnotherPerson = (req, res, next) => {
    res.json('Serge Spagnolini');
};

module.exports = { awesomeFunction, returnAnotherPerson };