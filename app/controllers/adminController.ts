import { Request, Response, NextFunction } from 'express';

export const viewDashboard = (req: Request, res: Response, next: NextFunction): void => {
  res.render('admin/dashboard/view_dashboard');
};
