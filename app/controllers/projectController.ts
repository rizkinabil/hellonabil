import { Request, Response } from 'express';
import showCase from '../models/Project';

export function viewProject(req: Request, res: Response) {
  res.render('cms/projects/view_project.ejs');
}

export async function addProject(req: Request, res: Response) {
  const { name } = req.body;
  const newProject = new showCase({
    name: name,
  });
  const createdProject = await newProject.save();
  res.json(createdProject);
}
