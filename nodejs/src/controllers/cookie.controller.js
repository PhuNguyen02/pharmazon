const COOKIE_NAME = 'user-cookie';

const getCookie = async (req, res) => {
    res.status(200).json({
        cookie: req.cookies
    })
}

const clearCookie = async (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.status(200).json({
        message: "Done clearing cookies"
    })
}

module.exports = { getCookie, clearCookie }