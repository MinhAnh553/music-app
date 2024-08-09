import { Router as router } from 'express';
import topicRoute from './topicRoute';

const Router: router = router();

Router.use('/topic', topicRoute);

export const clientRoute = Router;
