import { Router } from 'express';
import fs from 'fs';

const mainRoute = Router();


/**
 * @swagger
 * /  :
 *   get:
 *     description: Returns a list of users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
mainRoute.get('/', (req:any, res) => {

  console.log(req.sessionID);
    res.send('main api route works');
});



export default mainRoute;