import { Express, Request, Response } from 'express';
import express from 'express';
import * as path from 'path';
import { json, urlencoded } from 'body-parser';
import methodOverride from 'method-override';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { upload } from './middlewares/multer';
import flash from 'connect-flash';

import router from './routes/api';

import { viewDashboard } from './controllers/dashboardController';
import { addProject, deleteProject, editProject, viewProject } from './controllers/projectController';

export class Server {
  private app: Express;

  constructor(app: Express) {
    this.app = app;

    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(methodOverride('_method'));
    this.app.use(
      session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true, maxAge: 60000 },
      })
    );
    this.app.use(cookieParser());
    this.app.use(flash());

    this.app.use(express.static(path.resolve('./') + '/build/frontend'));
    this.app.use(express.static('public'));

    // view engine template setup
    this.app.set('views', path.join(__dirname, 'views')); // specify the views directory
    this.app.set('view engine', 'ejs'); // register the template engine

    // sb2-admin template
    this.app.use('/sb-admin-2', express.static(path.resolve('./') + '/node_modules/startbootstrap-sb-admin-2'));

    // routes
    this.app.get('/api', viewDashboard);
    this.app.get('/api/projects', viewProject);
    this.app.post('/api/projects', upload, addProject);
    this.app.put('/api/projects/', editProject);
    this.app.delete('/api/projects/:id', deleteProject);

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
