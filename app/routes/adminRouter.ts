import { Router } from 'express';
import { viewDashboard } from '../controllers/adminController';

const adminRouter: Router = Router();

adminRouter.get('/api/dashboard', viewDashboard);

export default adminRouter;
