
const handler = async (req, res) => {
    try {
        res.status(200).json('A random string')
    } catch (error) {
        console.log(error)
    }
};

module.exports = handler;
