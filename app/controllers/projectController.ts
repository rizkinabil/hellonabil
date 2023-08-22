import { Request, Response } from 'express';
import * as path from 'path';
import fs from 'fs-extra';
import showCase from '../models/Showcase';
import ImagesModel, { ImagesDocument } from '../models/Images';

export async function viewProject(req: Request, res: Response) {
  const showcaseData = await showCase.find();
  res.render('cms/projects/view_project.ejs', { showcaseData });
}

export const addProject = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, designerName, description, url } = req.body;

    // const alertMessage = req.flash('alertMessage');
    // const alertStatus = req.flash('alertStatus');
    // const alert = {
    //   message: alertMessage,
    //   status: alertStatus,
    // };
    // res.render('cms/projects/view_project.ejs', { alert });

    const imageFile = req.files['image'][0];
    const imageUrl = `images/${imageFile.filename}`;

    const newProject = new showCase({
      name: name,
      designerName: designerName,
      description: description,
      imageUrl: imageUrl,
      url: url,
    });

    const savedShowcase = await newProject.save();

    for (let i = 0; i < req.files.gallery.length; i++) {
      const galleryImageModel = await ImagesModel.create({ url: `gallery/${req.files.gallery[i].filename}` });
      savedShowcase.gallery.push(galleryImageModel._id);
    }
    await savedShowcase.save();

    res.redirect('/api/projects');
  } catch (error) {
    req.flash('alertMessage', `${error.message}`);
    req.flash('alertMessage', 'danger');
    res.redirect('/api/projects');
  }
};

export async function editProject(req: Request, res: Response) {
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

export async function deleteProject(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const showcase = await showCase.findOne({ _id: id }).populate('gallery');

    for (const galleryImage of showcase.gallery) {
      const imageModel = galleryImage as ImagesDocument;
      await fs.unlink(path.join(`public/${galleryImage.url}`));
      await imageModel.deleteOne();
    }
    await fs.unlink(path.join(`public/${showcase.imageUrl}`));
    await showcase.deleteOne();
    res.redirect('/api/projects');
  } catch (error) {
    console.log('error', error);
    res.redirect('/api/projects');
  }
}
