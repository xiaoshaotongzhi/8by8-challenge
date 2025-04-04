// filepath: /c:/Users/YIHAN SHAO/Documents/GitHub/8by8-challenge/typescript-project/src/routes/index.ts
import { Application, Router } from 'express';
import { IndexController } from '../controllers/index';

const indexController = new IndexController();
const router = Router();

export function setRoutes(app: Application): void {
  router.get('/', indexController.home);
  router.get('/about', indexController.about);
  app.use(router);
}