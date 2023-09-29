const {Router} = require('express');
const LoginRouter = Router();
const loginHandler = require('./Handlers/Login/loginHandler.js')


LoginRouter.get('/login', loginHandler);

module.exports = LoginRouter;



