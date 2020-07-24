const express = require("express");
const routes = express.Router();

const UserController = require("./Controllers/UserController");
const SessionController = require("./Controllers/SessionController");


routes.post('/api', UserController.CepRequest);
routes.get('/api', UserController.index);

routes.get('/session', SessionController.autho);


module.exports = routes;