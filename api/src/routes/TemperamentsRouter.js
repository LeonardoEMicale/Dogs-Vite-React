const {Router} = require('express');
const TemperamentsRouter = Router();
const getAllTemperamentsHandler = require('./Handlers/Temperaments/getAllTemperamentsHandler')



TemperamentsRouter.get('/', getAllTemperamentsHandler);

module.exports = getAllTemperamentsHandler;