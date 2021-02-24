import { Router } from 'express';
import SurveysController from './controllers/SurveysController';
import UsersController from './controllers/UsersController';

const routes = Router();

const usersController = new UsersController();
const surveysController = new SurveysController();

routes.post('/users', usersController.create);

routes.get('/surveys', surveysController.index);
routes.post('/surveys', surveysController.create);

export default routes;