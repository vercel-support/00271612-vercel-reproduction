import axios from 'axios';

const handler = async (req, res) => {
    try {
        let data
        try {
            data = await axios.get('https://vercel-reproduction.vercel.app/api/reference')
        } catch (error) {
            console.log('locally caught error')
        }
        res.status(200).json(data?.data || 'No data but working')
    } catch (error) {
        console.log(error)
    }
};

module.exports = handler;
