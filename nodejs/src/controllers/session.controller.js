const getSession = (req, res) => {
    if (req.session.User) {
        return res.status(200).json({ status: 'success', session: req.session.User })
    }

    return res.status(200).json({ status: 'error', session: 'No session' })
}

const createSession = (req, res) => {
    req.session.User = {
        website: 'anonystick.com',
        type: 'user javascript',
        like: '4550'
    }

    res.status(200).json({ status: 'success' })
}

const deleteSession = (req, res) => {
    req.session.destroy(function (err) {
        return res.status(200).json({ status: 'success', session: 'cannot access session here' })
    })
}


module.exports = { getSession, createSession, deleteSession }