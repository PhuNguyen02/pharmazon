const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

function authorizeUser(req, res, next) {
    if (req.user.role !== 'user') return res.sendStatus(403);
    next();
}

function authorizeAdmin(req, res, next) {
    if (req.user.role !== 'admin') return res.sendStatus(403);
    next();
}

module.exports = { authenticateToken, authorizeUser, authorizeAdmin };
