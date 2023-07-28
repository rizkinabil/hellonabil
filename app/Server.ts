import { Express, Request, Response } from 'express';
import express from 'express';
import * as path from 'path';
import { json, urlencoded } from 'body-parser';

import router from './routes/api';

import { viewDashboard } from './controllers/dashboardController';
import { addProject, viewProject } from './controllers/projectController';

export class Server {
  private app: Express;

  constructor(app: Express) {
    this.app = app;

    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));

    this.app.use(express.static(path.resolve('./') + '/build/frontend'));

    // view engine template setup
    this.app.set('views', path.join(__dirname, 'views')); // specify the views directory
    this.app.set('view engine', 'ejs'); // register the template engine

    // sb2-admin template
    this.app.use('/sb-admin-2', express.static(path.resolve('./') + '/node_modules/startbootstrap-sb-admin-2'));

    // render view
    this.app.get('/api', (req: Request, res: Response): void => {
      res.render('index');
    });
    this.app.get('/api/dashboard', viewDashboard);
    this.app.get('/api/projects', viewProject);
    this.app.post('/api/projects', addProject);
    // this.app.post('/api/projects', (req: Request, res: Response): void => {
    //   const { name } = req.body;
    //   console.log(name);
    // });

    // API
    // this.app.use('/api', router);

    this.app.get('*', (req: Request, res: Response): void => {
      res.sendFile(path.resolve('./') + '/build/frontend/index.html');
    });
  }

  public start(port: number): void {
    this.app.listen(port, () => console.log(`server listening on port ${port}!`));
  }
}
