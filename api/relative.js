import axios from 'axios';
const handler = async (req, res) => {
    try {
        const data = await axios.get('/api/reference')
        res.status(200).json(data.data)
    } catch (error) {
        console.log(error)
    }
};

module.exports = handler;
