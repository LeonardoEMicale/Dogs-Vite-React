const {User} = require('../../../db');

const loginHandler = async (req, res) => {
    try {
        const {email, password} = req.query;
        if(!email || !password) return res.status(400).send('Faltan datos')
        const user = await User.findOne({where: {email: email}});
        if(!user) return res.status(404).send('User not found');
        return user.password === password
        ? res.json({acces:true})
        : res.status(403).send('Password incorrect')
    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = loginHandler;