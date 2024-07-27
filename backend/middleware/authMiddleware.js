const jwt = require('jsonwebtoken');
// const User = require('../models/User'); // Adjust the path as necessary

const authenticateToken = (req, res, next) => {
    const authHeader = req.Headers['Authorization'];
    
    // Check if the authHeader starts with 'Bearer '
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided or malformed header' });
    }
    
    // Extract the token from the Bearer string
    const token = authHeader.split(' ')[1];
    
    if (!token) return res.status(401).json({ message: 'No token provided' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Failed to authenticate token' });
        req.user = user;
        next();
    });
};


const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'You do not have permission to perform this action' });
        }
        next();
    };
};

module.exports = { authenticateToken, authorizeRoles };
