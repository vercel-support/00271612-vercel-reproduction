
const handler = async (req, res) => {
    try {
        const data = await axios.get('https://vercel.com/api/reference')
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
};

module.exports = handler;