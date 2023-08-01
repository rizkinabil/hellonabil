import { NextFunction, Request, Response } from 'express';
import * as path from 'path';
import fs from 'fs-extra';
import showCase from '../models/Showcase';

export async function viewProject(req: Request, res: Response) {
  const showcase = await showCase.find();
  res.render('cms/projects/view_project.ejs', { showcase });
}

export const addProject = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    // const alertMessage = req.flash('alertMessage');
    // const alertStatus = req.flash('alertStatus');
    // const alert = {
    //   message: alertMessage,
    //   status: alertStatus,
    // };
    const { name, description, url } = req.body;

    const newProject = new showCase({
      name: name,
      description: description,
      imageUrl: `images/${req.file.filename}`,
      url: url,
    });
    await newProject.save();
    res.redirect('/api/projects');
  } catch (error) {
    console.log('error', error);
    res.redirect('/api/projects');
  }
};

export async function editProject(req: Request, res: Response, next: NextFunction) {
  try {
    const { id, name, description, url } = req.body;
    const showcase = await showCase.findOne({ _id: id });

    if (req.file === undefined) {
      showcase.name = name;
      showcase.description = description;
      showcase.url = url;
      await showcase.save();
      res.redirect('/api/projects');
    } else {
      await fs.unlink(path.join(`public/${showcase.imageUrl}`));
      showcase.name = name;
      showcase.description = description;
      showcase.url = url;
      await showcase.save();
    }
  } catch (error) {
    console.log('error', error);
    res.redirect('/api/projects');
  }
}

export async function deleteProject(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const showcase = await showCase.findOne({ _id: id });
    await showcase.deleteOne();
    res.redirect('/api/projects');
  } catch (error) {
    console.log('error', error);
    res.redirect('/api/projects');
  }
}
