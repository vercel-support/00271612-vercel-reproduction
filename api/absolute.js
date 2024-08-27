const axios = require("axios");

const handler = async (req, res) => {
    try {
        const data = await axios.get('https://vercel-reproduction.vercel.app/api/reference')
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
};

module.exports = handler;
