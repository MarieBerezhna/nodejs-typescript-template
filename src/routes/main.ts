import { Router } from 'express';

const mainRoute = Router();

mainRoute.get('/', (req, res) => {
    res.send('main api route works');
});

  export default mainRoute;