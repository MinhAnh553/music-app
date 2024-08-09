import { Router as router } from 'express';
import topicRoute from './topicRoute';
import songRoute from './songRoute';

const Router: router = router();

Router.use('/topic', topicRoute);

Router.use('/songs', songRoute);

export const clientRoute = Router;
