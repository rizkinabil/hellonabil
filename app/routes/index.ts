import express, { Request, Response, NextFunction, Router } from 'express';

const router: Router = express.Router();

// get home page
router.get('/api', function (req: Request, res: Response, next: NextFunction) {
  res.redirect('admin/signin');
});

export default router;
