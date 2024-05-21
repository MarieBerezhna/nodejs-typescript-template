import { Router } from 'express';
const mainRoute = Router();

mainRoute.get('/', (req, res) => {
    res.send('main api route works');
});

// optionally add more routes or create them in other files in this folder and import here

const routes = [
    mainRoute
];

export default routes;