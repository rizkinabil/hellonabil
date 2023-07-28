import { Request, Response } from 'express';

export function viewDashboard(req: Request, res: Response) {
  res.render('cms/dashboard/view_dashboard.ejs');
}

// export const viewDashboard = (req: Request, res: Response): void => {
//   res.render('cms/dashboard/view_dashboard.ejs');
// };
