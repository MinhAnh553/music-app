import { Router as router } from 'express';
import topicController from '../../controllers/topicController';

const Router: router = router();

Router.route('/').get(topicController.listTopic);

export default Router;
