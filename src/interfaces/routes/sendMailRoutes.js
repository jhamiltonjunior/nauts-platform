import { Router } from 'express';

import sendMail from '../controllers/mailController.js';

const router = Router();
const { store } = sendMail;

router.post('/mail', store);

export default (app) => app.use(router);

// var cb0 = function (req, res, next) {
//   console.log('CB0');
//   next();
// }

// var cb1 = function (req, res, next) {
//   console.log('CB1');
//   next();
// }

// app.get('/example/d', [cb0, cb1], function (req, res, next) {
//   console.log('the response will be sent by the next function ...');
//   next();
// }, function (req, res) {
//   res.send('Hello from D!');
// });
