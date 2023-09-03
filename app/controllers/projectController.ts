import { Request, Response } from 'express';
import * as path from 'path';
import fs from 'fs-extra';
import showCase from '../models/Showcase';
import ImagesModel, { ImagesDocument } from '../models/Images';

export async function viewProject(req: Request, res: Response) {
  const showcaseData = await showCase.find();
  res.render('cms/projects/view_project.ejs', { showcaseData, action: 'view project' });
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

export async function viewEditProject(req: Request, res: Response) {
  const { id } = req.params;
  const showcaseData = await showCase.findOne({ _id: id }).populate({
    path: 'gallery',
    select: 'id url',
  });

  res.render('cms/projects/view_project.ejs', { showcaseData, action: 'view edit' });
}

export async function editProject(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { name, designerName, url, description } = req.body;

    const showcaseData = await showCase
      .findOne({ _id: id })
      .populate({
        path: 'gallery',
        select: 'id url',
      })
      .populate('gallery');

    if (!showcaseData) {
      throw new Error('Showcase not found');
    }

    showcaseData.name = name;
    showcaseData.designerName = designerName;
    showcaseData.url = url;
    showcaseData.description = description;

    if (req.files && req.files['image']) {
      const imageUpdate = await showCase.findOne({
        imageUrl: showcaseData.imageUrl,
      });
      await fs.unlink(path.join(`public/${imageUpdate.imageUrl}`));
      const imageFile = req.files['image'][0];
      const imageUrl = `images/${imageFile.filename}`;
      showcaseData.imageUrl = imageUrl;
    } else if (req.files && req.files['gallery']) {
      for (let i = 0; i < req.files.gallery.length; i++) {
        const galleryUpdate = await ImagesModel.findOne({
          _id: showcaseData.gallery[i]._id,
        });
        await fs.unlink(path.join(`public/${galleryUpdate.url}`));
        galleryUpdate.url = `gallery/${req.files.gallery[i].filename}`;
        await galleryUpdate.save();
      }
    }
    await showcaseData.save();
    res.redirect('/api/projects');
  } catch (error) {
    console.log('error', error);
    res.redirect('/api/projects');
  }
}

export async function viewGallery(req: Request, res: Response) {
  const { id } = req.params;
  const showcaseData = await showCase.findOne({ _id: id }).populate({
    path: 'gallery',
    select: 'id url',
  });

  res.render('cms/projects/view_gallery.ejs', { showcaseData });
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
