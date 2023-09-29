const {Router} = require('express');
const DogsRouter = Router();
const getAllDogsHandler = require('./Handlers/Dogs/getAllDogsHandler');
const postDogsHandler = require('./Handlers/Dogs/postDogsHandler');
const getDogsByIdHandler = require('./Handlers/Dogs/getDogsByIdHandler');
const deleteDogsHandler = require('./Handlers/Dogs/deleteDogsHandler');
//const postDogsValidate = require('./Middlewares/postDogsValidate');

DogsRouter.get('/', getAllDogsHandler);

DogsRouter.get('/:id', getDogsByIdHandler);

DogsRouter.post('/', postDogsHandler);

DogsRouter.delete('/:id', deleteDogsHandler);

module.exports = DogsRouter;