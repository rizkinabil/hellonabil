import { Express, Request, Response } from 'express';
import express from 'express';
import * as path from 'path';

// admin router
import adminRouter from './routes/adminRouter';
import { viewDashboard } from './controllers/adminController';

export class Server {
  private app: Express;

  constructor(app: Express) {
    this.app = app;

    this.app.use(express.static(path.resolve('./') + '/build/frontend'));

    // view engine template setup
    this.app.set('views', path.join(__dirname, 'views')); // specify the views directory
    this.app.set('view engine', 'ejs'); // register the template engine

    // sb2-admin template
    this.app.use('/sb-admin-2', express.static(path.resolve('./') + '/node_modules/startbootstrap-sb-admin-2'));

    this.app.get('/api', (req: Request, res: Response): void => {
      res.render('index');
    });
    // admin
    this.app.get('/api/admin', viewDashboard);

    this.app.get('*', (req: Request, res: Response): void => {
      res.sendFile(path.resolve('./') + '/build/frontend/index.html');
    });
  }

  public start(port: number): void {
    this.app.listen(port, () => console.log(`server listening on port ${port}!`));
  }
}
