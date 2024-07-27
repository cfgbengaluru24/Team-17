const jwt = require('jsonwebtoken');
// const User = require('../models/User'); // Adjust the path as necessary

const authenticateToken = (req, res, next) => {
    const authToken = req.headers.authorization;
    console.log(authToken)
    if (!authToken) {
      return res
        .status(401)
        .json({ success: false, message: "No token, authorization failed" });
    }
    const token = authToken.split(" ")[1];
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
