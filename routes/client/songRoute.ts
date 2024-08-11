import { Router as router } from 'express';
import songController from '../../controllers/songController';

const Router: router = router();

Router.route('/:slugTopic').get(songController.listSong);

Router.route('/detail/:slugSong').get(songController.detailSong);

export default Router;
