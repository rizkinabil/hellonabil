import express, { Request, Response, NextFunction, Router } from 'express';
import { addProject, viewProject } from '../controllers/projectController';
import { viewDashboard } from '../controllers/dashboardController';

const router = Router();

router.get('/dasboard', viewDashboard);
router.get('/project', viewProject);
router.post('/project', addProject);

export default router;
