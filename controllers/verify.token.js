const jwt = require('jsonwebtoken');

exports.verifyToken = async (req,res) => {
    try{
        const {token} = req.body;
        return res.json({
            status : jwt.verify(token, process.env.JWT_SECRET)
        });
    }
    catch(error) {
        return null
    }
}
