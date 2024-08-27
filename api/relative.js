const {get} = require("axios");

const handler = async (req, res) => {
    try {
        const data = await get('/api/reference')
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
};

module.exports = handler;
