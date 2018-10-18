const redisClient = require('./signin').redisClient;

const requireAuth = (req , res , next) => {
    const { authorization } = req.headers;
    
    if (!authorization) {
        return res.status(401).json('JSON Unauthorized')   
    }
    return redisClient.get(authorization , (err , reply) => {
        if(err || !reply){
            return res.status(401).json('JSON Unauthorized')   
        }
        console.log("You Shall Pass!");
        
        return next();
    })
}

module.exports = {
    requireAuth
}