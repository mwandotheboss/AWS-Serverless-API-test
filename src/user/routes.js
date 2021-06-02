import { Router } from 'express';

const routes = Router({ mergeParams: true });

routes.get('/', (req, res) => {
    res.status(200).json({
        "name": "mwando",
        "username": "mwandotheboss",
        "email": "zephaniamwando@gmail.com"
    });
});

export default {
    routes,
};